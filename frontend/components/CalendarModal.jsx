import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Contract, Utils } from 'alchemy-sdk'
import { useAccount, useSigner } from 'wagmi'
import EscrowABI from '../contracts_abi/EscrowABI.json'

export default function CalendarModal({
  nftContractAddress,
  tokenUri,
  nftAbi,
  escrowAbi,
}) {
  const [value, onChange] = useState(new Date())
  const [showModal, setShowModal] = useState(false)
  const [access, setAccess] = useState(false)
  const [isChecking, setIsChecking] = useState(false)
  const [checked, setChecked] = useState(false)
  const [paid, setPaid] = useState(false)
  const [isPaying, setIsPaying] = useState(false)

  const escrowContractAddress = '0x360722a8f5a60B02A5D62cE1DeA9FAF471ef6DAC'

  // Get the user's wallet address and status of their connection to it
  const { address, isDisconnected } = useAccount()
  // Get the signer instance for the connected wallet
  const { data: signer } = useSigner()

  // Function to check if user has NFT
  const checkNFT = async function () {
    console.log(access)
    console.log(tokenUri, nftContractAddress, address, signer)
    const nftContract = new Contract(nftContractAddress, nftAbi, signer)

    try {
      setIsChecking(true)
      const checkTx = await nftContract.balanceOf(address)
      console.log(parseInt(checkTx))
      console.log(parseInt(checkTx) >= 1)
      setIsChecking(false)
      setChecked(true)
      setAccess(parseInt(checkTx) >= 1)
    } catch (e) {
      console.log(e)
      setIsChecking(false)
    }
  }

  const pay = async function () {
    const escrowContract = new Contract(
      escrowContractAddress,
      EscrowABI,
      signer,
    )
    try {
      setIsPaying(true)
      const payTx = await escrowContract.depositFunds(
        '0xD26a77BE873CDc25F0238634326f85986E6cBd1F',
        '0',
        '0',
        { value: Utils.parseEther('0.01') },
      )
      await payTx.wait()
      setIsPaying(false)
      setPaid(true)
    } catch (e) {
      console.log(e)
      setIsChecking(false)
      setIsPaying(false)
    }
  }

  return (
    <>
      <div class='flex flex-col bg-white border shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
        <Calendar onChange={onChange} value={value} />
        {isChecking ? (
          <p class='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-orange-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'>
            Checking credentials...
          </p>
        ) : access ? (
          <button
            class='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
            type='button'
            onClick={async () => await pay()}
          >
            Confirm time and pay
          </button>
        ) : checked ? (
          <p class='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'>
            Search for a different tutor or level up!
          </p>
        ) : (
          <button
            type='button'
            onClick={async () => await checkNFT()}
            className='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
          >
            Choose time
          </button>
        )}

        {isPaying ? (
          <p class='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-orange-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'>
            Processing payment...
          </p>
        ) : paid ? (
          <a
            class='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
            href='/meeting'
          >
            Go to tutorial
          </a>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
