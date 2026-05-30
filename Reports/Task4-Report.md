# Task 4 Report

## Aim
To set up a private blockchain using Ganache and build a simple decentralized message board.

## Technologies Used
- Ganache (Private Blockchain)
- Hardhat
- React
- Solidity

## Steps Performed
1. Installed and started Ganache UI.
2. Configured `hardhat.config.js` to point to the local Ganache RPC URL.
3. Created `PrivateMessageBoard.sol` to store text strings on-chain.
4. Built a simple React UI to read and write messages.
5. Deployed the contract to Ganache and tested it via the frontend.

## Result
The private blockchain setup was successful. When I posted a message from the React UI, I could instantly see the new block being mined in the Ganache interface.

## Conclusion
Ganache is an excellent tool for local development. Seeing blocks and transactions visually helped me understand how blockchain state changes work in real-time without spending real money on gas fees.
