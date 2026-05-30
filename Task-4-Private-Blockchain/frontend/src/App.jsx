import { useState } from 'react';
import { ethers } from 'ethers';
import './App.css';

// Replace this with your Ganache deployed contract address
const contractAddress = "0xYourGanacheContractAddressHere";

const contractABI = [
  "function postMessage(string memory _content) public",
  "function getMessageCount() public view returns (uint256)",
  "function getMessage(uint256 index) public view returns (address, string memory, uint256)"
];

function App() {
  const [account, setAccount] = useState(null);
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  // Connect MetaMask to Ganache
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        // Ideally, we would fetch messages here
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  // User posts a message
  const handlePost = async () => {
    if (!account) return alert("Connect wallet first!");
    if (!message) return alert("Message cannot be empty!");

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    try {
      const tx = await contract.postMessage(message);
      await tx.wait();
      alert("Message posted on private blockchain!");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Failed to post message");
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Private Message Board (Ganache)</h1>
        <button onClick={connectWallet}>
          {account ? `Connected: ${account.substring(0, 6)}...` : "Connect Wallet"}
        </button>
      </header>

      <main>
        <section className="card">
          <h2>Post a New Message</h2>
          <input 
            type="text" 
            placeholder="Type your message here..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
          />
          <button onClick={handlePost}>Post on Blockchain</button>
        </section>

        <section className="card">
          <h2>Message History</h2>
          <p>Messages stored on the Ganache blockchain will appear here.</p>
          <ul>
            {posts.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
