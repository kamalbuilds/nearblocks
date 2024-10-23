import { useState, useEffect } from 'react';
import { VmComponent } from '@/components/vm/VmComponent';
import { useBosComponents } from '@/hooks/useBosComponents';

interface CoinGeckoAIAgentProps {
  tokenSymbol: string;
}

const CoinGeckoAIAgent: React.FC<CoinGeckoAIAgentProps> = ({ tokenSymbol }) => {
  const [question, setQuestion] = useState(`What's the current price of ${tokenSymbol}?`);
  const components = useBosComponents();

  return (
    <div className="bg-white dark:bg-black-600 soft-shadow rounded-xl p-4 mt-4">
      <h2 className="text-lg font-semibold mb-2">CoinGecko AI Assistant</h2>
      <VmComponent
        src={components?.coinGeckoAIAgent}
        props={{
          question,
          onAsk: setQuestion,
        }}
      />
    </div>
  );
};

export default CoinGeckoAIAgent;