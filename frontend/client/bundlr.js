import { providers } from 'ethers';
import { WebBundlr } from '@bundlr-network/client';
 
const Bundlr = async () => {
  // Request permission from the user to access their Ethereum account
  await window.ethereum.enable();
  // Create a new Web3 provider using the user's Ethereum account
  const provider = new providers.Web3Provider(window.ethereum);
  // Wait for the provider to be ready to use
  await provider._ready();
 
  // Create a new instance of the Bundlr and, passing in the provider and the URL of the Bundlr node
  const bundlr = new WebBundlr(
    'https://node1.bundlr.network',
    'matic', // You can use any of the currencies supported by Bundlr
    provider,
  );
  // Wait for the Bundlr instance to be ready to use
  await bundlr.ready();
 
  // Return the Bundlr instance
  return bundlr;
};
 
export default Bundlr;