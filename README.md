
# MODULE 1 PROJECT

This program is a Module 1 Project program that demonstrates the basic syntax and functionality of the Solidity programming language and Javascript.
## Description

This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain .The purpose of this project is to 
1. Generate a 5-item collection using DALLE 2 or Midjourney etc.
2. Store items on IPFS using pinata.cloud or any other according to your choice
3. Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
4. You should have a promptDescription function on the contract that returns the prompt you used to generate the images
5. Map Your NFT Collection using Polygon network token mapper. Note: this isn’t necessary but helpful for visualization.
6. Write a hardhat script to batch mint all NFTs. Hint: ERC721A is optimal here.
7. Write a hardhat script to batch transfer all NFTs from Ethereum sepolia to Polygon amoy using the FxPortal Bridge
8. Approve the NFTs to be transferred
9. Deposit the NFTs to the Bridge
10. Test balanceOf on Amoy 

This program serves as a simple and straightforward introduction to Solidity programming, and can be used as a stepping stone for more complex projects in the future.

# Getting Started

## To run the project you can use this steps:

You will want to do the following steps to run the project :-

1. First of all , install the metamask wallet on Browser.
2. In Metamask , you have to Add sepolia and amoy test networks . For adding this , go to chainlist website (https://chainlist.org/?testnets=true) then click on Use Metamask button in the Pop-up and make sure the 'Include Testnets' checkbox is enabled . Then search for 11155111 chain ID in 'Search Networks' input field and then click on Add to Metamask button to add network to Metamask and then click on Approve button in the pop-up by Metacrafters. After this , search for 80002 chain ID in 'Search Networks' input field and then click on Add to Metamask button to add network to Metamask and then click on Approve button in the pop-up by Metacrafters . Both the Networks are added to our metamask wallet .
3.  Now, we need testnet tokens in both the networks to run the transactions . For Obtaining Sepolia testnet token go to https://cloud.google.com/application/web3/faucet/ethereum/sepolia and for amoy testnet tokens go to https://faucet.polygon.technology/ (Joining Polygon Discord is required) and get the testnet tokens in both the networks.
4. Clone the Github repository(make sure each file here is available).
5. Open VS Code.
6. Inside the project directory, in the terminal type: `npm i` and wait for it to complete.
7. Put your private key in .env file.
8. Run `npx hardhat run scripts/deploy.js --network sepolia` to deploy our contract.
9. Paste the newly deployed contract address in the tokenAddress variable for the other scripts rather than getbalance.js
10. Run `npx hardhat run scripts/mint.js --network sepolia` to mint NFTs to your wallet
11. Run `npx hardhat run scripts/approveDeposit.js --network sepolia` to approve and deposit your NFTs to polygon
12. Wait 20-30 minutes for NFTs to show on polygon account
13. Use https://www.oklink.com/amoy to check your account for the NFTs. Once they arrive, you can click on the NFT Holdings and click on your NFT collection to get the contract address for polygon.
14. Use the polygon contract address for your getBalance script's tokenAddress
15. Run `npx hardhat run scripts/getBalance.js --network amoy` to see the new polygon NFT balance.
16. Run `npx hardhat run scripts/prompt.js --network sepolia` to see all Token Urls of images and all prompts description that are used to generate that images in CO-PILOT .
17. Project is successfully completed. 
 
## Author

GAURAV GARG
STUDENT
CHANDIGARH UNIVERSITY
