// This page will display the video conference/live stream
import styles from '../styles/Meeting.module.css'
import Frame from '../components/Frame'
import React, { useState } from 'react'

const ROOM_URL = 'https://iframe.huddle01.com/123'

export default function Meeting() {
  const [showSuccessModal, setSuccessShowModal] = useState(false)
  const [showFailModal, setFailShowModal] = useState(false)

  const handleSuccess = async function () {
    setSuccessShowModal(true)
  }

  const handleFail = async function () {
    setFailShowModal(true)
  }

  return (
    <div>
      <main className={styles.main}>
        <br />
        <p className='font-bold text-5xl'>Your tutorial is now taking place</p>
        <br />
        <Frame roomUrl={ROOM_URL} />
        <button
          type='button'
          onClick={async () => await handleSuccess()}
          className='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
        >
          Successful
        </button>
        <button
          type='button'
          onClick={async () => await handleFail()}
          className='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
        >
          Unsuccesful
        </button>

        {showSuccessModal ? (
          <>
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
              <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                {/*content*/}
                <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  {/*header*/}
                  <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                    <h3 className='text-3xl font-semibold text-center'>
                      Congratulations on the successful tutorial!
                    </h3>
                    <button
                      className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                      onClick={() => setSuccessShowModal(false)}
                    >
                      <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className='relative p-6 flex-auto'>
                    <p className='my-4 text-slate-500 text-lg leading-relaxed'>
                      The payment is currently being transferred. Please check
                      your wallet in 30 seconds to verify the transaction has
                      been successful. We hope to see you again soon!
                    </p>
                  </div>
                  {/*footer*/}
                  <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                    <button
                      className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'
                      onClick={() => setSuccessShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
        ) : null}
        {showFailModal ? (
          <>
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
              <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                {/*content*/}
                <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  {/*header*/}
                  <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                    <h3 className='text-3xl font-semibold text-center'>
                      Something went wrong with your planned tutorial.
                    </h3>
                    <button
                      className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                      onClick={() => setFailShowModal(false)}
                    >
                      <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className='relative p-6 flex-auto'>
                    <p className='my-4 text-slate-500 text-lg leading-relaxed'>
                      The tutor may have ended this tutorial too early. The
                      payment has been returned to the student. Please contact
                      support for assistance if you believe this is a mistake.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                    <button
                      className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'
                      onClick={() => setFailShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
        ) : null}
      </main>
    </div>
  )
}
