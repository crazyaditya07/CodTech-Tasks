# Task 3: DeFi Lending & Borrowing DApp

## 1. Objective
The objective of this task is to create a basic Decentralized Finance (DeFi) application that allows users to deposit, borrow, and repay tokens.

## 2. Tools Used
- Solidity (for the backend smart contracts)
- Hardhat (for local blockchain testing)
- React & Vite (for the frontend user interface)
- Ethers.js (to connect the frontend to the blockchain)
- MetaMask (Wallet extension)

## 3. Project Structure
- `contracts/DeFiLending.sol`: The smart contract managing deposits, loans, and interest rates.
- `scripts/deploy.js`: Script to deploy the contract.
- `frontend/`: A simple React application with basic vanilla CSS.

## 4. How to Run

### Backend (Smart Contract)
1. Open a terminal in the `Task-3-DeFi-Lending-DApp` folder.
2. Install dependencies: `npm install`
3. Compile the contract: `npx hardhat compile`
4. Run a local node: `npx hardhat node`
5. Open another terminal and deploy: `npx hardhat run scripts/deploy.js --network localhost`
6. Copy the deployed contract address.

### Frontend (React UI)
1. Open a terminal in the `frontend/` folder.
2. Install dependencies: `npm install`
3. Open `src/App.jsx` and replace the `contractAddress` variable with the one you copied.
4. Start the app: `npm run dev`
5. Open your browser to the local Vite URL and connect your MetaMask wallet (make sure it's connected to your local Hardhat network).

## 5. Output Screenshots
*(Screenshots of the React frontend and MetaMask transactions are saved in the root `Screenshots/` folder).*

## 6. Conclusion
This project taught me the full-stack blockchain development process. I learned how to create a simple interest rate calculation, manage liquidity pools, and connect a basic React frontend to interact with my deployed smart contract using Ethers.js.
