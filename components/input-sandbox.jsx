import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import WindowBar from './window-bar';
import styles from '../styles/sandbox.module.css';
import windowStyle from '../styles/window.module.css';

const InputSandbox = ({ height = 50, lang = 'java',initialCode="//Write Code", keywords,inputs=[],correctOutput }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  let collectedInputs = [];

  function handleEditorChange(value, event) {
    setCode(value);
    setOutput('');
  }

  function verifyCode() {
    let temp = code;
    // check if all keywords are present in code
    let missingKeywords = [];
    keywords.forEach((keyword) => {
        if (!temp.includes(keyword)) {
            missingKeywords.push(keyword);            
        } else {
            // replace first occurence of keyword with empty string
            let index = temp.indexOf(keyword);
            temp = temp.substring(index, temp.length);
            temp = temp.replace(keyword, '');

        }
    });

    if (missingKeywords.length > 0) {
            setOutput('You are missing: ' + missingKeywords.join(', '));
            return false;
    } else {
        return true;
    }

}

  function runCode() {
    if(verifyCode()){
        for(let i=0;i <inputs.length;i++){
            collectedInputs.push(prompt(inputs[i]));
        }
        let temp = correctOutput;
        for(let i=0;i <collectedInputs.length;i++){
            temp = temp.replace(`[${i}]`,collectedInputs[i]);
        }
        setOutput(temp);
    }
  }

  return (
    <div className={styles.sandbox + ' ' + windowStyle.window}>
      <WindowBar />
      <Editor
        className={styles['editor-container']}
        height={height + 'vh'}
        defaultLanguage={lang}
        theme="vs-dark"
        defaultValue={code}
        onChange={handleEditorChange}
      />

      <div className={styles['verify-button']}>
        <button onClick={runCode}>Run Code</button>
      </div>

      {output && (
        <div className={styles['output-container']}>
          <pre>{output}</pre>
        </div>
      )}
    </div>
  );
};

export default InputSandbox;
