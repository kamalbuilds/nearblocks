import React, { useState } from 'react';

interface CoinGeckoAIAgentProps {
  tokenSymbol: string;
}

const CoinGeckoAIAgent: React.FC<CoinGeckoAIAgentProps> = ({ tokenSymbol }) => {
  const [question, setQuestion] = useState(`What's the current price of ${tokenSymbol}?`);
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const askQuestion = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/coingecko/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error('Error fetching answer:', error);
      setAnswer('Sorry, I couldn\'t get an answer at this time.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-black-600 soft-shadow rounded-xl p-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">CoinGecko AI Assistant</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full p-2 border rounded dark:bg-black-500 dark:border-black-300"
      />
      <button
        onClick={askQuestion}
        disabled={isLoading}
        className="mt-2 p-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-green-300"
      >
        {isLoading ? 'Loading...' : 'Ask'}
      </button>
      {answer && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-black-500 rounded">
          <h3 className="font-bold">Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default CoinGeckoAIAgent;
