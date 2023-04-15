// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Escrow {
  struct Tutorial {
    address tutor;
    address tutee;
    uint cost;
    uint start_time;
    uint duration;
  }

  Tutorial[] public tutorials;

  event Deposit(address indexed _from, uint256 _value);
  event Release(address indexed _to, uint256 _value);
  event Withdrawal(address indexed _to, uint256 _value);
  event LinkRelease(address indexed _to, string _value); //link release event

  constructor() {}

  function depositFunds(
    address _tutor,
    uint _start_time,
    uint _duration
  ) public payable {
    Tutorial memory tutorial = Tutorial(
      _tutor,
      msg.sender,
      msg.value,
      _start_time,
      _duration
    );
    tutorials.push(tutorial);
    emit Deposit(msg.sender, msg.value);
  }

  function refundStudent() public {}

  function payTutor() public {}
}
