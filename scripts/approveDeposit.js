const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/NFTContract.sol/NFTContract.json");

const tokenAddress = "0x6F4bbFdf85E5049Cae6cA58dA5d87b3613A1b712";
const tokenABI = tokenContractJSON.abi;
const FxERC721RootTunnel = "0x9E688939Cb5d484e401933D850207D6750852053";
const walletAddress = "0xB33B12dfc34Bd1291De7b86bFe242E5F1F8b464f";

async function main() {
  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(
    fxRootContractABI,
    FxERC721RootTunnel
  );

  for (let i = 0; i < 5; i++) {
    const approveTx = await tokenContract.approve(FxERC721RootTunnel, i);
    await approveTx.wait();
    console.log("Approval confirmed");

    const depositTx = await fxContract.deposit(
      tokenAddress,
      walletAddress,
      i,
      "0x6556"
    );
    await depositTx.wait();
    console.log("Tokens deposited");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
