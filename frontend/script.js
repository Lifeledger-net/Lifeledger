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

// ✅ Global provider & signer for Sepolia
let provider = new ethers.providers.Web3Provider(window.ethereum);
let signer = provider.getSigner();
let recordContract;

async function connectWallet() {
  if (!window.ethereum) {
    alert("Please install MetaMask.");
    return;
  }

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });

    provider = new ethers.providers.Web3Provider(window.ethereum); // ensure update
    signer = provider.getSigner();

    const { chainId } = await provider.getNetwork();
    if (chainId !== 11155111) {
      alert("Please switch MetaMask to the Sepolia network.");
      return;
    }

    recordContract = new ethers.Contract(contractAddress, recordRegistryABI, signer);
    alert("Wallet connected to Sepolia. Smart contract ready.");
  } catch (err) {
    console.error("Wallet connection error:", err);
    alert("Could not connect wallet.");
  }
}

async function uploadRecord() {
  const patient = document.getElementById("patientAddress").value;
  const cid = document.getElementById("recordCID").value;

  if (!patient || !cid) {
    alert("Please fill both patient address and CID.");
    return;
  }

  try {
    const tx = await recordContract.storeRecord(patient, cid);
    await tx.wait();
    alert("Record uploaded successfully!");
  } catch (err) {
    console.error("Upload error:", err);
    alert("Transaction failed.");
  }
}

async function readRecords() {
  const patient = document.getElementById("readPatient").value;

  if (!patient) {
    alert("Please enter a patient address.");
    return;
  }

  try {
    const records = await recordContract.getRecords(patient);
    const output = document.getElementById("recordOutput");

    if (!records.length) {
      output.innerHTML = "<i>No records found for this address.</i>";
      return;
    }

    output.innerHTML =
      "<strong>Records:</strong><br>" +
      records.map(cid => `<code>${cid}</code>`).join("<br>");
  } catch (err) {
    console.error("Read error:", err);
    alert("Failed to fetch records.");
  }
}

