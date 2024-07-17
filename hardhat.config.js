require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    amoy: {
      url: "https://rpc-amoy.polygon.technology",
      accounts: [
        "95bf279f1bdc8690cf4d52e43303ba1c41415a39beeb6cb8b37d21e219dd876e",
      ],
    },
    sepolia: {
      url: "https://rpc.sepolia.org",
      accounts: [
        "95bf279f1bdc8690cf4d52e43303ba1c41415a39beeb6cb8b37d21e219dd876e",
      ],
    },
  },
};
