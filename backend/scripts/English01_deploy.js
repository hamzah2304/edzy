const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("English01");
  const contract = await Contract.deploy();

  await contract.deployed();

  console.log("English01 deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
