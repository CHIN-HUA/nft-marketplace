// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.4;

//erc721標準
//繼承了OpenZepplin實現的ERC721標準
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter; //計數器
    Counters.Counter private _tokenIds; //遞增增加不同的tokenID
    address contractAddress; //合約地址

    constructor(address marketplaceAddress) ERC721("Metaverse", "METT") {
        contractAddress = marketplaceAddress;
    }

    function createToken(string memory tokenURI) public returns (uint) {
        _tokenIds.increment(); //增加tokenID
        uint256 newItemId = _tokenIds.current();

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true); //同意調用
        return newItemId;
    }
}