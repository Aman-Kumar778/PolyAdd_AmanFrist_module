const tokenContractJSON = require("../artifacts/contracts/NFTContract.sol/NFTContract.json");
require("dotenv").config();

const tokenAddress = "0x6F4bbFdf85E5049Cae6cA58dA5d87b3613A1b712"; //deployed address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xB33B12dfc34Bd1291De7b86bFe242E5F1F8b464f";

async function main() {
  const nft = await ethers.getContractAt(
    "NFTContract",
    "0x6F4bbFdf85E5049Cae6cA58dA5d87b3613A1b712"
  );
  const tokenURIs = [
    "https://moccasin-defiant-rodent-373.mypinata.cloud/ipfs/QmPFBXJreS3sHhK71PRQ4k7bws2LtpyQdzHgFYw22tLUNv/0.jpg",
    "https://moccasin-defiant-rodent-373.mypinata.cloud/ipfs/QmPFBXJreS3sHhK71PRQ4k7bws2LtpyQdzHgFYw22tLUNv/1.jpg",
    "https://moccasin-defiant-rodent-373.mypinata.cloud/ipfs/QmPFBXJreS3sHhK71PRQ4k7bws2LtpyQdzHgFYw22tLUNv/2.jpg",
    "https://moccasin-defiant-rodent-373.mypinata.cloud/ipfs/QmPFBXJreS3sHhK71PRQ4k7bws2LtpyQdzHgFYw22tLUNv/3.jpg",
    "https://moccasin-defiant-rodent-373.mypinata.cloud/ipfs/QmPFBXJreS3sHhK71PRQ4k7bws2LtpyQdzHgFYw22tLUNv/4.jpg",
  ];

  const prompts = [
    "A serene beach with crystal-clear water.",
    "A cozy cabin in a snowy forest",
    "A futuristic cityscape at sunset.",
    "A meteor shower seen from a quiet countryside",
    "A colorful underwater coral reef scene",
  ];

  for (let i = 0; i < tokenURIs.length; i++) {
    await nft.mintNFT(tokenURIs[i], prompts[i]);
    console.log(`Minted NFT with ID ${i} to owner with prompt: ${prompts[i]}`);
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
