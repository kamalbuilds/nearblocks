import { componentsByNetworkId } from '@/data/bos-components';
import { networkId } from '@/utils/config';

export const useBosComponents = () => {
  const components = componentsByNetworkId[networkId];

  if (!components) {
    throw new Error(
      `useBosComponents(): unimplemented NetworkId "${networkId}". Add values to "data/bos-components.ts"`,
    );
  }

  return {
    ...components,
    coinGeckoAIAgent: 'your-account.near/widget/CoinGeckoAIAgent',
  };
};
