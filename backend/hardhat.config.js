require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
require('@nomiclabs/hardhat-etherscan')

module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  allowUnlimitedContractSize: true,
  networks: {
    hardhat: {},
    mainnet: {
      accounts: [`${process.env.PRIVATE_KEY}`],
      url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
    goerli: {
      accounts: [`${process.env.PRIVATE_KEY}`],
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    },
  },
  etherscan: {
    apiKey: `${process.env.ETHERSCAN_API_KEY}`,
    customChains: [
      {
        network: 'goerli',
        chainId: 5,
        urls: {
          apiURL: 'https://api-goerli.etherscan.io/api',
          browserURL: 'https://goerli.etherscan.io',
        },
      },
    ],
  },
}
