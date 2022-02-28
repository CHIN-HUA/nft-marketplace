require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = ""

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: '',
      accounts: [privateKey]
    },
    mainnet: {
      url: '',
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
