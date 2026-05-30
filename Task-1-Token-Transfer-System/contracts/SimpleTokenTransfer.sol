// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// This is a simple smart contract to transfer tokens between users
contract SimpleTokenTransfer {
    
    // Store the balance of each user using a mapping
    mapping(address => uint256) public balances;
    
    // This is the owner of the contract
    address public owner;

    // This event runs when tokens are transferred
    event Transfer(address indexed from, address indexed to, uint256 amount);

    // This function runs once when the contract is deployed
    constructor() {
        owner = msg.sender;
        // Give the owner 1000 initial tokens
        balances[owner] = 1000; 
    }

    // This function transfers tokens from one user to another
    function transfer(address receiver, uint256 amount) public {
        // Check if the sender has enough tokens
        require(balances[msg.sender] >= amount, "Not enough tokens");

        // Deduct tokens from sender
        balances[msg.sender] -= amount;

        // Add tokens to receiver
        balances[receiver] += amount;

        // Emit the transfer event
        emit Transfer(msg.sender, receiver, amount);
    }

    // This function checks the balance of a user
    function getBalance(address user) public view returns (uint256) {
        return balances[user];
    }
}
