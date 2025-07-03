# 🧬 LifeLedger — Decentralized Health Record Registry

LifeLedger is a decentralized health record registry system built using smart contracts, IPFS/Filecoin for storage, and deployed on the **Polygon Amoy Testnet**. It enables patients to securely store medical records and grant/revoke access to healthcare providers.

---

## 📌 Core Features

- **On-chain Access Control**: Patients can grant or revoke access to their medical data.
- **IPFS-based Storage**: Records are stored off-chain using IPFS/Filecoin (via Web3.Storage) and referenced by CID.
- **Key-Based Record Mapping**: Records are stored and retrieved using hashed keys for secure access.
- **EVM-Compatible Deployment**: Deployed using Foundry on Etheruem Sepolia Testnet.
- **Scalable & Open**: Modular architecture that supports adding more roles (AI agents, orgs, etc).

---

## 🧱 Smart Contracts

- `AccessControlManager.sol`:  
  Manages which providers or agents have access to a patient’s records. Built with a nested mapping structure.

- `RecordRegistory.sol`:  
  Stores IPFS CIDs representing patient medical records. Supports multiple records per patient with potential for hashed key mapping.

---

## 🧰 Tech Stack

- **Solidity 0.8.24** – smart contract development
- **Foundry** – contract scripting, testing, and deployment
- **Etheruem Sepolia ** – blockchain environment
- **Web3.Storage** – IPFS + Filecoin storage solution
- **MetaMask** – wallet for signing and managing accounts

---

## 🛠 Deployment Overview

### Local Project Structure

### Compiler

- Using **Solidity v0.8.24** to ensure compatibility with Amoy (EIP-3855 not fully supported on 0.8.20+)

### Foundry Configuration

- `foundry.toml` includes:
  - RPC endpoint for Etheruem Sepolia
  - solc_version = "0.8.24
  - Broadcast settings via `PRIVATE_KEY`

### Deployment Flow

1. Compile and simulate contract deployments via Foundry
2. Broadcast to Amoy using:

3. Record addresses from `console.log` or `broadcast/*.json` files

---

## 🌐 IPFS Storage Integration

- File records (e.g., PDFs or images) are uploaded to Web3.Storage
- Each file returns a **CID** which is stored in the smart contract
- No sensitive data is stored on-chain — only references (CIDs)

---

## 🌍 Network Details

- **Chain**: Etheruem Sepolia testnet
- **Chain ID**: 11155111
- **RPC**: `https://sepolia.infura.io/v3/b26f468efd8b4ec299c070e46c280a9c`
- **FAUCET**: `https://sepoliafaucet.com`
- **Explorer**: `https://sepolia.etherscan.io`

---

## 🧩 Future Extensions

- Connect `RecordRegistory` directly to `AccessControlManager`
- Build a frontend to:
- Upload files to IPFS
- Grant/revoke access via MetaMask
- View stored records based on permissions
- Add encryption before uploading files to IPFS
- Index CIDs off-chain for UI improvements

---

## 👨‍💻 Built With

- 🧱 Solidity
- 💻 Foundry
- 🔗 Sepolia ETH
- 🦊 MetaMask
- ✍️ Saber YT

## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
