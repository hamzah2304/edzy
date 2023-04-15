import React, { useState } from 'react'


export default function LessonCard({ subject, description, completion }) {
  const [showModal, setShowModal] = useState(false)


  return (
    <div class='flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
      <div class='p-4 md:p-5'>
        <h3 class='text-lg font-bold text-gray-800 dark:text-white text-center'>
          {subject}
        </h3>
        <p class='mt-1 text-gray-800 dark:text-gray-400 text-center'>
          {description}
        </p>
        <p class='mt-1 text-gray-800 dark:text-gray-400 text-center'>
          {completion}
        </p>

        <a
              className='font-medium text-white hover:text-gray-400 dark:text-white dark:hover:text-gray-500'
              href='/learn/english01'
            >
              Choose
            </a>

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
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      {/* <CalendarModal /> */}
    </div>
  )
}
