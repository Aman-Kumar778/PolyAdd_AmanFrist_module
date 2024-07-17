const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/NFTContract.sol/NFTContract.json");
require("dotenv").config();

async function main() {
  const nft = await hre.ethers.getContractAt(
    "NFTContract",
    "0x494ec67857fA1bd8dD590151B1225DBf6682C890"
  );
  for (let i = 0; i < 5; i++) {
    console.log("Token " + i + " URL is : " + (await nft.token_URL(i)));
    console.log(
      "Token " + i + " PROMPT is : " + (await nft.prompt_Description(i))
    );
  }
  console.log("All Token URLs are : " + (await nft.all_Token_URLs()));
  console.log(
    "All Token PROMPTs are : " + (await nft.all_Prompt_Descriptions())
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
