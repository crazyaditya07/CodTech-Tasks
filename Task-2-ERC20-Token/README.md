# Task 2: Custom ERC20 Token

## 1. Objective
The aim of this project is to create a custom ERC20 token named "CodeTech Token" (CTT) with an initial supply of 1,000,000 tokens using the OpenZeppelin library.

## 2. Tools Used
- Solidity
- Hardhat
- OpenZeppelin Contracts (for the ERC20 standard)
- Node.js

## 3. Project Structure
- `contracts/CodeTechToken.sol`: The custom token contract with mint and burn features.
- `scripts/deploy.js`: The deployment script.
- `package.json`: Contains the `@openzeppelin/contracts` dependency.

## 4. How to Run

1. Open a terminal in this folder (`Task-2-ERC20-Token`).
2. Install the necessary packages, including OpenZeppelin:
   ```bash
   npm install
   ```
3. Compile the token contract:
   ```bash
   npx hardhat compile
   ```
4. Deploy the token to a local test network:
   ```bash
   npx hardhat run scripts/deploy.js
   ```

## 5. Output Screenshots
*(Please find the screenshots of the contract compilation and deployment in the root `Screenshots/` folder).*

## 6. Conclusion
By completing this task, I learned how to use OpenZeppelin to safely create standard ERC20 tokens without reinventing the wheel. I also learned about token supply, minting new tokens, and burning tokens.
