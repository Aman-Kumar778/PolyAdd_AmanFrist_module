// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTContract is ERC721, Ownable {
    uint256 public count = 0;
    mapping(uint256 => string) private token_URLs;
    mapping(uint256 => string) private prompts;

    constructor() ERC721("MyNFT", "MFT") {}

    function mintNFT(string memory nft_URL, string memory prompt) public onlyOwner {
        uint256 new_Token_Id = count;
        _safeMint(owner(), new_Token_Id);
        token_URLs[new_Token_Id] = nft_URL;
        prompts[new_Token_Id] = prompt;
        count = count + 1;
    }
    
    function token_URL(uint256 token_Id) public view returns (string memory) {
        require(token_Id <= count, "Requesting URI for non-existent token");
        return token_URLs[token_Id];
    }

    function prompt_Description(uint256 token_Id) public view returns (string memory) {
        require(token_Id <= count, "Requesting Prompt for nonexistent token");
        return prompts[token_Id];
    }

    function all_Token_URLs() public view returns (string[] memory){
        string[] memory URLs = new string[](count);
        for (uint i = 0; i < count; i++) {
            URLs[i] = token_URLs[i];
        }
        return URLs;
    }

    function all_Prompt_Descriptions() public view returns (string[] memory){
        string[] memory PROMPTs = new string[](count);
        for (uint i = 0; i < count; i++) {
            PROMPTs[i] = prompts[i];
        }
        return PROMPTs;
    }
}
