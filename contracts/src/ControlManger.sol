// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract ControlManger {
    // Mapping: patient => (provider => access status)
    mapping(address => mapping(address => bool)) private accessList;

    // Events
    event AccessGranted(address indexed patient, address indexed provider); // Granted Access
    event AccessRevoked(address indexed patient, address indexed provider); // Revoked Access

    // Grant access to a provider (doctors or even the ai agent we have)
    function grantAccess(address provider) external {
        accessList[msg.sender][provider] = true;
        emit AccessGranted(msg.sender, provider);
    }

    // Revoke access from a provider
    function revokeAccess(address provider) external {
        accessList[msg.sender][provider] = false;
        emit AccessRevoked(msg.sender, provider);
    }

    // Check if a provider has access to a patient's data
    function hasAccess(address patient, address provider) external view returns (bool) {
        return accessList[patient][provider];
    }
}
