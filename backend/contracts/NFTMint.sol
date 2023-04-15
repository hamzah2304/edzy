// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTMint is ERC721 {

    uint256 public constant TOKEN_ID = 1;
    mapping(address => bool) public taskCompleted;
    
    constructor() ERC721("Task Completion NFT", "TCN") {}

    function mintNFT() public {
        require(taskCompleted[msg.sender], "You have not completed the required task");
        _safeMint(msg.sender, TOKEN_ID);
    }

    function completeTask() public {
        taskCompleted[msg.sender] = true;
    }
}



}
