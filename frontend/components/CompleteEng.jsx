import styles from '../styles/FindTutor.module.css'
import Router, { useRouter } from 'next/router'
import React, { useState } from 'react'

const MultipleChoiceQuestion = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const [isCorrect, setIsCorrect] = useState(null)

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }

  const handleSubmit = (e) => {
    setIsCorrect(true)
  }

  return (
    <div>
      <h3 class='text-lg font-bold text-gray-800 dark:text-black text-center'>
        What is the first letter of the english alphabet?
      </h3>
      <br />
      <form onSubmit={handleSubmit}>
        <label class='text-lg text-gray-800 dark:text-black text-center'>
          A. b
          <input
            type='radio'
            name='answer'
            value='A'
            checked={selectedOption === 'A'}
            onChange={() => handleOptionChange('A')}
          />
        </label>
        <br />
        <label class='text-lg text-gray-800 dark:text-black text-center'>
          B. a
          <input
            type='radio'
            name='answer'
            value='B'
            checked={selectedOption === 'B'}
            onChange={() => handleOptionChange('B')}
          />
        </label>
        <br />
        <label class='text-lg text-gray-800 dark:text-black text-center'>
          C. d
          <input
            type='radio'
            name='answer'
            value='C'
            checked={selectedOption === 'C'}
            onChange={() => handleOptionChange('C')}
          />
        </label>
        <br />
        <label class='text-lg text-gray-800 dark:text-black text-center'>
          D. f
          <input
            type='radio'
            name='answer'
            value='D'
            checked={selectedOption === 'D'}
            onChange={() => handleOptionChange('D')}
          />
        </label>
        <br />
        <br />
        <button
          type='button'
          onClick={() => handleSubmit}
          className='content-center mt-3 py-3 px-4 inline-flex flex-col justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
        >
          Submit
        </button>
        <br />
        <br />
      </form>
    </div>
  )
}

export default MultipleChoiceQuestion
