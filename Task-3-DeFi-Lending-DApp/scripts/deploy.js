const hre = require("hardhat");

async function main() {
  // Get the smart contract factory
  const DeFiLending = await hre.ethers.getContractFactory("DeFiLending");
  
  // Deploy the contract
  const defi = await DeFiLending.deploy();
  
  // Wait for deployment
  await defi.waitForDeployment();
  
  // Log the deployment address
  console.log(`DeFi Lending app deployed to: ${defi.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
