// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// This is a simple DeFi Lending and Borrowing smart contract
contract DeFiLending {
    // Store user deposits
    mapping(address => uint256) public deposits;
    
    // Store user loans (borrowed amounts)
    mapping(address => uint256) public loans;

    // Fixed base interest rate
    uint256 public constant BASE_RATE = 2; // 2%
    
    // Total amount in the pool
    uint256 public totalPool;
    
    // Total amount borrowed
    uint256 public totalBorrowed;

    // Events to track activity
    event Deposited(address indexed user, uint256 amount);
    event Borrowed(address indexed user, uint256 amount);
    event Repaid(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    // User deposits tokens (Ether in this case) into the lending pool
    function deposit() public payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        
        deposits[msg.sender] += msg.value;
        totalPool += msg.value;
        
        emit Deposited(msg.sender, msg.value);
    }

    // Calculate simple interest based on base rate and utilization
    function calculateInterest(uint256 borrowAmount) public view returns (uint256) {
        // Simple utilization calculation
        uint256 utilizationRate = 0;
        if (totalPool > 0) {
            utilizationRate = (totalBorrowed * 100) / totalPool;
        }
        
        // Total interest rate = base rate + (utilization / 10)
        uint256 interestRate = BASE_RATE + (utilizationRate / 10);
        
        return (borrowAmount * interestRate) / 100;
    }

    // User borrows tokens from the pool
    function borrow(uint256 amount) public {
        require(amount > 0, "Borrow amount must be greater than zero");
        require(totalPool >= amount, "Not enough liquidity in the pool");
        
        // Simple collateral check: User must have deposited at least double the borrow amount
        require(deposits[msg.sender] >= amount * 2, "Not enough collateral deposited");

        uint256 interest = calculateInterest(amount);
        uint256 totalRepayment = amount + interest;

        loans[msg.sender] += totalRepayment;
        totalPool -= amount;
        totalBorrowed += amount;

        // Send the borrowed ETH to the user
        payable(msg.sender).transfer(amount);

        emit Borrowed(msg.sender, amount);
    }

    // User repays their loan
    function repay() public payable {
        require(loans[msg.sender] > 0, "No active loan to repay");
        require(msg.value <= loans[msg.sender], "Overpaying loan is not allowed");

        loans[msg.sender] -= msg.value;
        totalPool += msg.value;
        totalBorrowed -= msg.value; // Simplification: assuming interest also goes back to pool

        emit Repaid(msg.sender, msg.value);
    }

    // User withdraws their deposit
    function withdraw(uint256 amount) public {
        require(amount > 0, "Withdraw amount must be greater than zero");
        require(deposits[msg.sender] >= amount, "Not enough funds deposited");
        
        // Ensure they are not withdrawing collateral needed for their active loan
        require(deposits[msg.sender] - amount >= loans[msg.sender] * 2, "Collateral needed for active loan");

        deposits[msg.sender] -= amount;
        totalPool -= amount;

        payable(msg.sender).transfer(amount);

        emit Withdrawn(msg.sender, amount);
    }
}
