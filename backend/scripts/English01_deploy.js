const hre = require('hardhat')
const { verify } = require('../helpers/verify')

async function main() {
  const Contract = await hre.ethers.getContractFactory('English01')
  const contract = await Contract.deploy()

  await contract.deployed()

  console.log('English01 deployed to:', contract.address) // 0x938EADDF2d8c7903616E4Bd5aaed948D13f36b22

  await verify(contract.address, [])
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
