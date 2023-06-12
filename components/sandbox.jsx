import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

import WindowBar from './window-bar';
import styles from '../styles/sandbox.module.css';
import windowStyle from '../styles/window.module.css';
const Sandbox = ({ height = 50, lang = 'java', initialCode = '', keywords, correctOutput = 'Correct Code' }) => {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState('Click Verify to check your code');

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
                let index = temp.indexOf(keyword);
                temp = temp.substring(index, temp.length);
                temp = temp.replace(keyword, '');
            }
        });

        if (missingKeywords.length > 0) {
            if (missingKeywords.length > 5) {
                setOutput('You are missing some keywords');
            } else {
                setOutput('You are missing: ' + missingKeywords.join(', '));
            }
        } else {
            setOutput(correctOutput);
        }

    }

    return (
        <div className={styles.sandbox + " " + windowStyle.window}>

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
                <button onClick={verifyCode}>Verify</button>
            </div>

            <div className={styles['output-container']}>
                <pre>{output}</pre>
            </div>
        </div>
    );
};

export default Sandbox;
