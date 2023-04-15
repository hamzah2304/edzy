import styles from '../styles/FindTutor.module.css'
import Router, { useRouter } from 'next/router'
import React, { useState } from 'react';

const MultipleChoiceQuestion = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === 'B') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div>
        <h3 class='text-lg font-bold text-gray-800 dark:text-white text-center'>
          What is the first letter of the english alphabet?
        </h3>      
        <form onSubmit={handleSubmit}>
        <label class='text-lg text-gray-800 dark:text-black text-center'>
          A. b
          <input
            type="radio"
            name="answer"
            value="A"
            checked={selectedOption === 'A'}
            onChange={() => handleOptionChange('A')}
          />
        </label>
        <br />
        <label class='text-lg text-gray-800 dark:text-black text-center'>
          B. a    
          <input
            type="radio"
            name="answer"
            value="B"
            checked={selectedOption === 'B'}
            onChange={() => handleOptionChange('B')}
          />
        </label>
        <br />
        <label class='text-lg text-gray-800 dark:text-black text-center'>
          C. d
          <input
            type="radio"
            name="answer"
            value="C"
            checked={selectedOption === 'C'}
            onChange={() => handleOptionChange('C')}
          />
        </label>
        <br />
        <label class='text-lg text-gray-800 dark:text-black text-center'>
          D. f
          <input
            type="radio"
            name="answer"
            value="D"
            checked={selectedOption === 'D'}
            onChange={() => handleOptionChange('D')}
          />
        </label>
        <br />
        <br />
        <button
              className='font-medium text-black hover:text-gray-400 dark:text-black dark:hover:text-gray-500'
              type="submit"
                  >
                    Submit
        </button>
        <br />
        <br />


      </form>
      {isCorrect !== null && (
        <p>{isCorrect ? 'Congrats, you passed! You can now mint an NFT.' : 'Incorrect! The correct answer is B.'}</p>
      )}
    </div>
  );
};

export default MultipleChoiceQuestion;


