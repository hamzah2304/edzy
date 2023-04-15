const hre = require('hardhat')
const { verify } = require('../helpers/verify')

async function main() {
  const Contract = await hre.ethers.getContractFactory('Escrow')
  const contract = await Contract.deploy()

  await contract.deployed(5)

  console.log('Escrow deployed to:', contract.address) //0x5FbDB2315678afecb367f032d93F642f64180aa3

  await verify(contract.address, [])
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
