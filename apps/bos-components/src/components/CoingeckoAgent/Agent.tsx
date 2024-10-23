import { useState, useEffect } from 'react';

interface Props {
  ownerId: string;
  network: string;
  tokenSymbol: string;
}

export default function CoinGeckoAIAgent({ ownerId, network, tokenSymbol }: Props) {
  const [question, setQuestion] = useState(`What's the current price of ${tokenSymbol}?`);
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { getConfig } = VM.require(`${ownerId}/widget/includes.Utils.libs`);

  const config = getConfig && getConfig(network);

  const askQuestion = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${config.backendUrl}coingecko/ask`, {
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
        className="w-full p-2 border rounded"
      />
      <button
        onClick={askQuestion}
        disabled={isLoading}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        {isLoading ? 'Loading...' : 'Ask'}
      </button>
      {answer && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-bold">Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}