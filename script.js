const chatbotIcon = document.getElementById('chatbot-icon');
if (chatbotIcon) {
  chatbotIcon.addEventListener('click', () => {
    alert("Chatbot coming soon! You'll be able to talk to a doctor here.");
  });
}

// Toggle mobile nav
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}



// ethers.js

// Web3Modal Project ID from WalletConnect Cloud
const projectId = "557ab117156ddfd1922c8f88bd01e1d6";

// ABI from RecordRegistry.sol
const recordRegistryABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "patient", "type": "address" },
      { "internalType": "string", "name": "cid", "type": "string" }
    ],
    "name": "storeRecord",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "patient", "type": "address" }
    ],
    "name": "getRecords",
    "outputs": [
      { "internalType": "string[]", "name": "", "type": "string[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "patient", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "uploader", "type": "address" },
      { "indexed": false, "internalType": "string", "name": "cid", "type": "string" }
    ],
    "name": "RecordStored",
    "type": "event"
  }
];

const contractAddress = "0x40e1bc29e1642564ccEd34DC990D37CeEa2AeFBB";

//  Wallet & Contract setup
const { EthereumClient, w3mConnectors, w3mProvider } = window.Web3ModalEthereum;
const { Web3Modal } = window.Web3Modal;
const { configureChains, createConfig } = window.wagmi;
const { sepolia } = window.wagmiChains;

const chains = [sepolia];
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

const modal = new Web3Modal({
  projectId,
  themeMode: "light",
  ethereumClient,
});

let provider, signer, recordContract;

// wallet connect
async function connectWallet() {
  try {
    await modal.openModal(); 

    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();

    const network = await provider.getNetwork();
    if (network.chainId !== 11155111) {
      alert("Please switch to Sepolia network.");
      return;
    }

    recordContract = new ethers.Contract(contractAddress, recordRegistryABI, signer);

    const address = await signer.getAddress();
    alert(`Wallet connected: ${address}`);
  } catch (err) {
    console.error("Connection failed:", err);
    alert("Could not connect wallet.");
  }
}

// to Upload a new record to Sepolia chain
async function uploadRecord() {
  const patient = document.getElementById("patientAddress").value;
  const cid = document.getElementById("recordCID").value;

  if (!patient || !cid) {
    alert("Patient address and CID required.");
    return;
  }

  try {
    const tx = await recordContract.storeRecord(patient, cid);
    await tx.wait();
    alert("Record successfully uploaded to blockchain.");
  } catch (err) {
    console.error("Upload failed:", err);
    alert("Upload failed.");
  }
}

// the records for a patient address
async function getRecords() {
  const patient = document.getElementById("readPatient").value;

  if (!patient) {
    alert("Enter a patient address.");
    return;
  }

  try {
    const records = await recordContract.getRecords(patient);
    const output = document.getElementById("recordOutput");

    if (records.length === 0) {
      output.innerHTML = "<i>No records found.</i>";
    } else {
      output.innerHTML = "<b>Records:</b><br>" + records.map(c => `<code>${c}</code>`).join("<br>");
    }
  } catch (err) {
    console.error("Fetch failed:", err);
    alert("Unable to fetch records.");
  }
}


