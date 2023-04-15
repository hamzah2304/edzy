// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//basic token gating based on the NFT ownership. if the tutee pocessess the NFT a new meeting can be created
contract TokenGating is ERC721{

    string public roomId;
    string public contractAddress;
    mapping(address => bool) public hasAccess;

    event AccessGranted(address indexed account);
    event ChatRoomCreated(string _link);

    constructor(string memory _roomId, string memory _contractAddress) ERC721("NFT Token Gating", "TGN") {
        roomId = _roomId;
        contractAddress = _contractAddress;
    }
    
    function grantAccess(address _address) public {
        require(ownerOf(contractAddress) == msg.sender, "You are not authorized to enter the meeting"); 
        hasAccess[_address] = true;
        emit AccessGranted(_address);
    }

    function checkAccess() public view returns (bool) {
        return hasAccess[msg.sender];
    }

    function createChatRoom() public {
        require(hasAccess[_address] = true, "Meeting cannot be initiated");
        emit ChatRoomCreated(roomId);
    }

}
