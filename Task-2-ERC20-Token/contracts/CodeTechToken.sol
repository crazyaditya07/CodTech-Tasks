// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Import the ERC20 standard from OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// Import the Ownable standard so only the owner can mint/burn
import "@openzeppelin/contracts/access/Ownable.sol";

// This is our custom ERC20 token contract
contract CodeTechToken is ERC20, Ownable {
    
    // The constructor runs once when deploying the contract
    // We pass the Token Name "CodeTech Token" and Symbol "CTT" to the ERC20 constructor
    constructor() ERC20("CodeTech Token", "CTT") Ownable(msg.sender) {
        // Mint the initial supply of 1,000,000 tokens to the owner
        // We multiply by 10**decimals() because ERC20 tokens have 18 decimals by default
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    // This function allows the owner to create (mint) new tokens
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // This function allows users to destroy (burn) their own tokens
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    // Note: The standard "transfer" function is already included in the OpenZeppelin ERC20 contract!
}
