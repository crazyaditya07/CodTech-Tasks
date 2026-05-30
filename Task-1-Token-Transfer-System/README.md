# Task 1: Token Transfer System

## 1. Objective
The aim of this project is to create a simple Solidity smart contract that can store user balances and allow users to transfer tokens to each other.

## 2. Tools Used
- Solidity (Smart Contract Language)
- Hardhat (Development Environment)
- Node.js (Runtime)

## 3. Project Structure
- `contracts/SimpleTokenTransfer.sol`: The smart contract code with beginner-friendly comments.
- `scripts/deploy.js`: A simple script to deploy the contract.
- `hardhat.config.js`: Configuration for Hardhat.

## 4. How to Run

1. Open a terminal in this folder (`Task-1-Token-Transfer-System`).
2. Install dependencies (if you haven't already):
   ```bash
   npm install
   ```
3. Compile the smart contract:
   ```bash
   npx hardhat compile
   ```
4. Deploy the contract to a local Hardhat node:
   ```bash
   npx hardhat run scripts/deploy.js
   ```

## 5. Output Screenshots
*(Please see the `Screenshots/` folder at the root of the repository for images of the compiled and deployed code).*

## 6. Conclusion
This task helped me learn the basics of Solidity, such as using `mapping` to store balances, writing functions to update state, and emitting events on the blockchain.
