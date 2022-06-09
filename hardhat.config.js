require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
<<<<<<< Updated upstream
 const privateKey = fs.readFileSync("secret").toString().trim() || "01234567890123456789";
=======
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

// infuraId is optional if you are using Infura RPC
>>>>>>> Stashed changes
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
<<<<<<< Updated upstream
      url: "https://rpc-mumbai.maticvigil.com",
=======
      url: "https://rpc-mumbai.matic.today",
>>>>>>> Stashed changes
      accounts: [privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
<<<<<<< Updated upstream
      url: "https://speedy-nodes-nyc.moralis.io/3136b9f19b898cfd133d18c2/polygon/mumbai",
=======
      url: "https://rpc-mainnet.maticvigil.com",
>>>>>>> Stashed changes
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
