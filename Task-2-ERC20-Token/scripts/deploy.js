const hre = require("hardhat");

async function main() {
  // Get the smart contract factory
  const CodeTechToken = await hre.ethers.getContractFactory("CodeTechToken");
  
  // Deploy the custom ERC20 token
  const token = await CodeTechToken.deploy();
  
  // Wait for it to be deployed
  await token.waitForDeployment();
  
  // Print out the address where the token was deployed
  console.log(`CodeTech Token (CTT) deployed to: ${token.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
