
import { useState } from 'react';
import { Button } from './ui/button';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from './ui/badge';
import { Wallet, Key, CheckCircle, AlertTriangle, Lock, RefreshCw } from 'lucide-react';

// This is a simulated blockchain component
// In a real implementation, it would connect to Ethereum/Solana via Web3.js
const BlockchainComponent = () => {
  const [connected, setConnected] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [transactionComplete, setTransactionComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = () => {
    setError(null);
    // In a real implementation, this would use Web3.js to connect to MetaMask
    setTimeout(() => {
      setConnected(true);
    }, 1500);
  };

  const simulateTransaction = () => {
    setError(null);
    setProcessing(true);
    
    // Simulate blockchain transaction delay
    setTimeout(() => {
      setProcessing(false);
      // 90% chance of success for the simulation
      if (Math.random() > 0.1) {
        setTransactionComplete(true);
      } else {
        setError("Transaction failed. Please try again.");
      }
    }, 3000);
  };

  const resetDemo = () => {
    setConnected(false);
    setProcessing(false);
    setTransactionComplete(false);
    setError(null);
  };

  return (
    <div className="max-w-xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Secure Property Transactions</CardTitle>
              <CardDescription>Using blockchain smart contracts</CardDescription>
            </div>
            <div className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${connected ? 'bg-green-500' : 'bg-gray-300'}`}></span>
              <span className="text-xs font-semibold">
                {connected ? 'Connected' : 'Not Connected'}
              </span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {!connected ? (
            <div className="text-center py-6">
              <Wallet className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">Connect Your Wallet</h3>
              <p className="text-sm text-gray-500 mb-4">
                Connect your wallet to securely sign property transactions using blockchain technology.
              </p>
              <Button onClick={connectWallet} className="bg-naija-green hover:bg-naija-green/90">
                Connect Wallet
              </Button>
            </div>
          ) : !transactionComplete ? (
            <div className="border rounded-lg p-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Key className="w-6 h-6 text-naija-green" />
                </div>
                <div>
                  <h3 className="font-medium">Property Purchase Agreement</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    3 Bedroom Apartment in Lekki, Lagos
                  </p>
                  <div className="mt-2">
                    <div className="bg-blue-100 text-blue-800 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Smart Contract
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Property ID:</span>
                  <span className="font-medium">NPV-12345-LK</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Purchase Price:</span>
                  <span className="font-medium">₦45,000,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Smart Contract:</span>
                  <span className="font-medium font-mono text-xs">0x1a2...3b4c</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Escrow Period:</span>
                  <span className="font-medium">14 days</span>
                </div>
              </div>
              
              <Button 
                onClick={simulateTransaction} 
                className="w-full bg-naija-green hover:bg-naija-green/90"
                disabled={processing}
              >
                {processing ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Processing Transaction
                  </>
                ) : (
                  "Sign & Execute Smart Contract"
                )}
              </Button>
            </div>
          ) : (
            <div className="text-center py-6">
              <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
              <h3 className="text-lg font-medium mb-2">Transaction Complete!</h3>
              <p className="text-sm text-gray-500 mb-6">
                Your property transaction has been securely recorded on the blockchain.
                Funds will be held in escrow until title verification is complete.
              </p>
              <div className="bg-gray-50 rounded-lg p-3 text-xs font-mono text-center mb-6">
                Transaction Hash: 0x7b6d3c8a2e9f1b5e4d2c6a7b8c9d0e1f2a3b4c5d
              </div>
              <Button variant="outline" onClick={resetDemo}>
                Reset Demo
              </Button>
            </div>
          )}
          
          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-between border-t pt-4 text-xs text-gray-500">
          <div className="flex items-center">
            <Lock className="w-3 h-3 mr-1" />
            Secured by blockchain
          </div>
          <div>Powered by NaijaPropertyVerse</div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlockchainComponent;
