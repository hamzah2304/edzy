// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Payment {

    uint256 public lessonDate;
    uint256 public withdrawalLimit;
    uint256 public lessonDuration;
    address payable public tutor;
    address payable public tutee;
    uint256 public lessonCost;
    uint256 public releaseTime;

    //add link ID/address as a string

    mapping(address => uint256) public balances;

    //events necessary to track the payments
    event Deposit(address indexed _from, uint256 _value);
    event Release(address indexed _to, uint256 _value);
    event Withdrawal(address indexed _to, uint256 _value);
    event LinkRelease(address indexed _to, string _value); //link release event

    //defining the variables
    constructor(address payable _tutor, address payable _tutee, uint256 _lessonCost, uint256 _releaseTime, uint256 _lessonDate, uint _lessonDuration) public payable {
        tutor = _tutor;
        tutee = _tutee;
        lessonCost = _lessonCost;
        lessonDate = _lessonDate;
        lessonDuration = _lessonDuration;
        releaseTime = lessonDate + lessonDuration;
        balances[tutee] = msg.value;
        //tutee = msg.sender; - since the initiator is the tutee always 
        //add link 
    }

    //initial deposition of funds by the tutee
    function depositFunds() public payable {
        require(msg.sender == tutee, "Only tutee can deposit funds");
        require(msg.value == lessonCost, "Incorrect deposit amount");
        balances[tutee] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    //there is a possibility of withdrawal up until 12 hr prior to the session 
    function withdrawFunds() public {
        require(msg.sender == tutee, "Only tutee can withdraw funds before release time");
        require(block.timestamp < lessonDate - 12 hours, "Funds can no longer be withdrawn");
        uint256 amount = balances[tutee];
        balances[tutee] = 0;
        tutee.transfer(amount);
        emit Withdrawal(tutee, amount);
    }
  
    //funds are released at agreed upon time to the tutor
    function releaseFunds() public {
        require(block.timestamp >= releaseTime, "Funds cannot be released yet");
        require(msg.sender == tutor, "Only tutor can release funds");
        uint256 amount = balances[tutee];
        balances[tutee] = 0;
        tutor.transfer(amount);
        emit Release(tutor, amount);
    }

    //the link is released after the funds are deposited and after the withdrawal time has passed
    //this ensures there is no access unless payment is locked 
    function sendMeetingId() {
        require(block.timestamp > lessonDate - 12 hours, "Link will be generated 12hr prior to the lesson");
        require(msg.sender == tutee, "Only tutee can acess the link");

        //a link can then be generated. currently, the meetings are started immediately after 
        //the token gating is complete. 
        //for demo purposes, this will not be implimented within huddle01.

        emit LinkRelease(tutee, roomId)

    }




}
