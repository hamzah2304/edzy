// Import CSS styles, and necessary modules from packages
import styles from '../styles/NftMinter.module.css'
import { Contract } from 'alchemy-sdk'
import { useState } from 'react'
import { useAccount, useSigner } from 'wagmi'
import English01ABI from '../contracts_abi/English01ABI.json'

// NFT Minter component
export default function NftMinter({
  contractAddress,
  tokenUri,
  abi,
  contentSrc,
  contentType,
}) {
  // Get the user's wallet address and status of their connection to it
  const { address, isDisconnected } = useAccount()
  // Get the signer instance for the connected wallet
  const { data: signer } = useSigner()
  // State hooks to track the transaction hash and whether or not the NFT is being minted
  const [txHash, setTxHash] = useState()
  const [isMinting, setIsMinting] = useState(false)

  // Function to mint a new NFT
  const mintNFT = async () => {
    console.log(tokenUri, contractAddress, address)
    // Create a new instance of the NFT contract using the contract address and ABI
    const nftContract = new Contract(contractAddress, abi, signer)
    try {
      // Set isMinting to true to show that the transaction is being processed
      setIsMinting(true)
      // Call the smart contract function to mint a new NFT with the provided token URI and the user's address
      const mintTx = await nftContract.safeMint(address, tokenUri)
      // Set the transaction hash in state to display in the UI
      setTxHash(mintTx?.hash)
      // Wait for the transaction to be processed
      await mintTx.wait()
      // Reset isMinting and txHash in state
      setIsMinting(false)
      setTxHash(null)
    } catch (e) {
      // If an error occurs, log it to the console and reset isMinting to false
      console.log(e)
      setIsMinting(false)
    }
  }
  return (
    <div className={styles.page_flexBox}>
      <div className={styles.page_container}>
        <div className={styles.nft_info}>
          {isDisconnected ? (
            <p>Connect your wallet to get started</p>
          ) : !txHash ? (
            <button
              className={`${styles.button} ${
                isMinting && `${styles.isMinting}`
              }`}
              disabled={isMinting}
              onClick={async () => await mintNFT()}
            >
              {isMinting ? 'Minting' : 'Mint Now'}
            </button>
          ) : (
            <div>
              <h3 className={styles.attribute_input_label}>TX ADDRESS</h3>
              <a
                href={`https://mumbai.polygonscan.com/tx/${txHash}`}
                target='_blank'
                rel='noreferrer'
              >
                <div className={styles.address_container}>
                  <div>
                    {txHash.slice(0, 6)}...{txHash.slice(6, 10)}
                  </div>
                  <img
                    src={
                      'https://static.alchemyapi.io/images/cw3d/Icon%20Large/etherscan-l.svg'
                    }
                    width='20px'
                    height='20px'
                  />
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
