const hre = require("hardhat");
const main = async () => {
  const ContractFactory = await hre.ethers.getContractFactory("transaction");
  const ContractObj = await ContractFactory.deploy();
  await ContractObj.deployed();
  console.log(ContractObj.address);
};
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
runMain();
