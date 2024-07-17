const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/NFTContract.sol/NFTContract.json");

const tokenAddress = "0x0f393aa976ca7e89eb19cbeb0d0d989acb642ba1";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xB33B12dfc34Bd1291De7b86bFe242E5F1F8b464f";

async function main() {
  const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const balance = await token.balanceOf(walletAddress);
  console.log(`You now have: ${balance} NFTs`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
