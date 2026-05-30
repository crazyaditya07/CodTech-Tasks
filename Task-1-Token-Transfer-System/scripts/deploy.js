const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const SimpleTokenTransfer = await hre.ethers.getContractFactory("SimpleTokenTransfer");
  
  // Deploy the contract
  const token = await SimpleTokenTransfer.deploy();
  
  // Wait for deployment to finish
  await token.waitForDeployment();
  
  // Print the deployed contract address
  console.log(`SimpleTokenTransfer deployed to: ${token.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
