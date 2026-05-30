# Task 2 Report

## Aim
To create and deploy a custom ERC20 token named "CodeTech Token" (CTT) with a fixed supply.

## Technologies Used
- Solidity
- OpenZeppelin Contracts
- Hardhat

## Steps Performed
1. Installed the `@openzeppelin/contracts` library.
2. Wrote `CodeTechToken.sol` inheriting from the standard ERC20 and Ownable contracts.
3. Added `mint` and `burn` functions.
4. Deployed the contract locally using Hardhat.

## Result
The CodeTech Token was successfully deployed. The OpenZeppelin library handled all the complex logic (like transfers and allowances), making the contract very simple and secure.

## Conclusion
I learned how crucial standard libraries are in blockchain development. Reusing audited code like OpenZeppelin is much safer than writing an ERC20 token from scratch.
