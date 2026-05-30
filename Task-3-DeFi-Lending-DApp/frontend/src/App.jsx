import { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';

// Replace this with your deployed contract address from Task 3 backend
const contractAddress = "0xYourDeployedContractAddressHere";

// A basic ABI with just the deposit function for this simple UI
const contractABI = [
  "function deposit() public payable",
  "function borrow(uint256 amount) public",
  "function repay() public payable",
  "function deposits(address) view returns (uint256)",
];

function App() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState("0");
  const [amount, setAmount] = useState("");

  // Connect MetaMask wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  // User deposits tokens here
  const handleDeposit = async () => {
    if (!account) return alert("Connect wallet first!");
    if (!amount) return alert("Enter an amount!");

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    try {
      const tx = await contract.deposit({ value: ethers.parseEther(amount) });
      await tx.wait();
      alert("Deposit successful!");
    } catch (error) {
      console.error(error);
      alert("Deposit failed");
    }
  };

  return (
    <div className="container">
      <header>
        <h1>DeFi Lending DApp</h1>
        <button onClick={connectWallet}>
          {account ? `Connected: ${account.substring(0, 6)}...` : "Connect Wallet"}
        </button>
      </header>

      <main>
        <section className="card">
          <h2>Dashboard</h2>
          <p>Your Address: {account ? account : "Not connected"}</p>
          <p>Your Deposits: {balance} ETH</p>
        </section>

        <section className="card">
          <h2>Deposit Funds</h2>
          <input 
            type="number" 
            placeholder="Amount in ETH" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
          <button onClick={handleDeposit}>Deposit</button>
        </section>

        <section className="card">
          <h2>Borrow Funds</h2>
          <p>This section allows users to borrow ETH using collateral.</p>
          <button disabled>Borrow (Coming Soon)</button>
        </section>
      </main>
    </div>
  );
}

export default App;
