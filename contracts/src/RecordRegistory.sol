// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract RecordRegistory {
    event RecordStored(address indexed patient, address indexed uploader, string cid); //events

    // Store a list of CIDs for a patient
    mapping(address => string[]) private records;

    // Store a new IPFS CID for a patient
    function storeRecord(address patient, string calldata cid) external {
        records[patient].push(cid);
        emit RecordStored(patient, msg.sender, cid);
    }

    // View a patient’s records
    function getRecords(address patient) external view returns (string[] memory) {
        return records[patient];
    }
}
