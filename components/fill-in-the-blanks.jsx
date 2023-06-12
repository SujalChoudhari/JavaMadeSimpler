// components/FillInTheBlanks.js

import React, { useState } from 'react';
import styles from '../styles/fill-in-the-blanks.module.css';
import windowStyle from "../styles/window.module.css";
import WindowBar from "./window-bar";


const FillInTheBlanks = ({ questionTop, questionLeft, questionRight, placeHolder = "Your answer", correctAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [verificationResult, setVerificationResult] = useState('');

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
    setVerificationResult('');
  };

  const verifyAnswer = () => {
    console.log(userAnswer,correctAnswer);
    if (userAnswer === correctAnswer) {
      setVerificationResult('Perfect! 🎉');
    } else {
      setVerificationResult('Try again! ❌');
    }
  };

  return (
    <div className={styles.fillInTheBlanks + " " + windowStyle.window}>
      <WindowBar />
      {questionTop}
      <pre>
        {questionLeft}
        <input
          type="text"
          value={userAnswer}
          onChange={handleAnswerChange}
          placeholder={placeHolder}
        /> {questionRight}
      </pre>
      <button onClick={verifyAnswer}>Verify</button>
      <div className={styles['output-container']}>
        <p>{verificationResult}</p>
      </div>
    </div>
  );
};

export default FillInTheBlanks;
