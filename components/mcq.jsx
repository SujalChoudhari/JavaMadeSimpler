import React, { useState } from 'react';
import styles from '../styles/mcq.module.css';
import windowStyle from '../styles/window.module.css';
import WindowBar from './window-bar';

const MCQ = ({ question, options, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [verificationResult, setVerificationResult] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    verifyAnswer(option);
  };

  const verifyAnswer = (option) => {
    if (option === correctAnswer) {
      setVerificationResult('Correct! 🎉');
    } else {
      setVerificationResult('Incorrect! ❌');
    }
  };

  const getOptionClass = (option) => {
    if (selectedOption === option) {
      return correctAnswer === option ? styles.correct : styles.incorrect;
    }
    return '';
  };

  return (
    <div className={`${styles.mcq} ${windowStyle.window}`}>
      <WindowBar />
      <p>{question}</p>
      <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <button
            key={index}
            className={`${styles.option} ${getOptionClass(option)}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className={styles['output-container']}>
        <p>{verificationResult}</p>
      </div>
    </div>
  );
};

export default MCQ;
