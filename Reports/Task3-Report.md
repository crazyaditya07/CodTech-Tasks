# Task 3 Report

## Aim
To build a basic DeFi application that allows users to deposit and borrow funds, connected to a React frontend.

## Technologies Used
- Solidity (Backend)
- Hardhat
- React & Vite (Frontend)
- Ethers.js
- MetaMask

## Steps Performed
1. Wrote a `DeFiLending.sol` contract with deposit, borrow, repay, and withdraw functions.
2. Implemented a simple interest rate calculation based on utilization.
3. Created a Vite+React frontend app with basic CSS.
4. Connected the React app to MetaMask using Ethers.js.
5. Tested transactions from the UI to the local Hardhat node.

## Result
The full-stack DApp is functional. Users can connect their MetaMask wallets and see their account address. They can successfully send ETH deposits through the React interface to the smart contract.

## Conclusion
This was the most challenging task as it required connecting the frontend to the blockchain. I learned a lot about `ethers.js` providers and signers, and how to handle wallet connections securely.
