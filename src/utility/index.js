import { InjectedConnector } from "@web3-react/injected-connector";

export const Injected = new InjectedConnector({
  supportedChainIds: [97], //chain ids for ethereum, goerli, bsc test net , bsc main net
});

export const formatBalance = (rawBalance) => {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
  return balance;
};

export const formatChainAsNum = (chainIdHex) => {
  const chainIdNum = parseInt(chainIdHex);
  return chainIdNum;
};

export const formatAddress = (addr) => {
  return `${addr.substring(0, 8)}...`;
};
