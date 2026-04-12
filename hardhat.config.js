require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.26",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          viaIR: true,
        },
      },
    ],
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    hashkey: {
      url: process.env.HASHKEY_RPC_URL || "https://mainnet.hsk.xyz",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      chainId: 177, // HashKey Chain mainnet chain ID
      gas: 8000000,
    },
    hashkeyTestnet: {
      url: process.env.HASHKEY_TESTNET_RPC_URL || "https://testnet.hsk.xyz",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      chainId: 133, // HashKey Chain testnet chain ID
      gas: 8000000,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  etherscan: {
    apiKey: {
      hashkey: process.env.HASHKEYSCAN_API_KEY || "hashkey",
      hashkeyTestnet: process.env.HASHKEYSCAN_API_KEY || "hashkey",
    },
    customChains: [
      {
        network: "hashkey",
        chainId: 177,
        urls: {
          apiURL: "https://hashkey.blockscout.com/api",
          browserURL: "https://hashkey.blockscout.com",
        },
      },
      {
        network: "hashkeyTestnet",
        chainId: 133,
        urls: {
          apiURL: "https://testnet-explorer.hsk.xyz/api",
          browserURL: "https://testnet-explorer.hsk.xyz",
        },
      },
    ],
  },
  sourcify: {
    enabled: true,
  },
};
