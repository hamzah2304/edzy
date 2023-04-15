import CalendarModal from './CalendarModal'
import React, { useState } from 'react'
import English01ABI from '../contracts_abi/English01ABI.json'

export default function TutorCard({ name, subject, description, price, src }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <div class='flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
      <img
        class='w-full h-auto rounded-t-xl'
        src={src}
        alt='Image Description'
      />
      <div class='p-4 md:p-5'>
        <h3 class='text-lg font-bold text-gray-800 dark:text-white text-center'>
          {name} | {subject}
        </h3>
        <p class='mt-1 text-gray-800 dark:text-gray-400 text-center'>
          {description}
        </p>

        <button
          type='button'
          onClick={() => setShowModal(true)}
          className='mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
        >
          Book a lesson
        </button>
        {showModal ? (
          <>
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
              <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                {/*content*/}
                <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  {/*header*/}
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'> */}
                  <div class='flex flex-col bg-white border shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
                    <CalendarModal
                      nftContractAddress='0x938EADDF2d8c7903616E4Bd5aaed948D13f36b22'
                      tokenUri='https://ipfs.filebase.io/ipfs/QmcZMwBfYwRfysPyLaJzMk5RwsgXnVz7JDkbh6eRbAfSjJ/QmdeEmVuLKxhy63CfLkt193sYTRHLLCH6qzyghBS27k7uJ'
                      nftAbi={English01ABI}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}

        <span class='text-lg font-bold text-gray-800 dark:text-white text-right'>
          ${price}/hr
        </span>
      </div>
      {/* <CalendarModal /> */}
    </div>
  )
}
