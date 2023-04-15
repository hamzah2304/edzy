import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function CalendarModal() {
  const [value, onChange] = useState(new Date())
  const [showModal, setShowModal] = useState(false)

  return (
    <div class='flex flex-col bg-white border shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
      <Calendar onChange={onChange} value={value} />

      <button
        type='button'
        onClick={() => setShowModal(true)}
        className='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
      >
        Choose time
      </button>
      <p class='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-orange-500 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'>
        Checking credentials...
      </p>
      <p class='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'>
        Search for a different tutor or level up!
      </p>
      <button
        class='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
        type='button'
        onClick={() => setShowModal(true)}
      >
        Confirm time and pay
      </button>
      <a
        class='w-full mt-3 py-3 px-4 inline-flex justify-center items-center gap-2  border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
        href='/meeting'
      >
        Go to tutorial
      </a>
    </div>
  )
}
