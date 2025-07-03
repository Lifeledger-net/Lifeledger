// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Script.sol";
import {ControlManger} from "../src/ControlManger.sol";
import {RecordRegistory} from "../src/RecordRegistory.sol";

contract DeployContract is Script {
    function run() external {
        vm.startBroadcast();

        ControlManger Manager = new ControlManger();

        RecordRegistory recordRegistry = new RecordRegistory();

        console.log("ControlManager deployed at:", address(Manager));
        console.log("RecordRegistory deployed at:", address(recordRegistry));

        vm.stopBroadcast();
    }
}
