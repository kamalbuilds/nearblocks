import { types } from 'nb-lake';
import { DexPairs, Network } from 'nb-types';

export type Config = {
  dbCa: string;
  dbCert: string;
  dbKey: string;
  dbUrl: string;
  delta: number;
  NEAR_TOKEN: string;
  network: Network;
  preloadSize: number;
  rpcUrl: string;
  s3BucketName: string;
  s3Endpoint: null | types.EndpointConfig;
  s3RegionName: string;
  sentryDsn?: string;
  STABLE_TOKENS: string[];
  startBlockHeight: number;
};

export type SwapArgs = {
  actions: Action[];
};

export type FtOnTransferArgs = {
  msg: string;
  sender_id: string;
};

export type PoolArgs = {
  tokens: string[];
};

type Action = {
  pool_id: number | string;
};

export type SwapPair = {
  baseAmount: string;
  baseToken: string;
  quoteAmount: string;
  quoteToken: string;
};

export type DexPairMeta = DexPairs & {
  baseDecimal: number;
  quoteDecimal: number;
};