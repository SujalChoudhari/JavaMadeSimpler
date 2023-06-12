import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

import WindowBar from './window-bar';
import styles from '../styles/sandbox.module.css';
import windowStyle from '../styles/window.module.css';
const Sandbox = ({
    height = 50,
    lang = 'java',
    version = "15.0.2",
    inputs = "",
    initialCode = `public class Main {
        public static void main(String[] args) {
            // Write code here
        }
    }` }) => {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState('Click Verify to check your code');


    function handleEditorChange(value, event) {
        setCode(value);
        setOutput('');
    }

    function verifyCode() {

        setOutput('Executing...');
        try {
            fetch('https://emkc.org/api/v2/piston/execute', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    language: lang,
                    version: version,
                    files: [
                        {
                            name: 'Main',
                            content: code.toString()
                        }
                    ],
                    args: [],
                    stdin: inputs
                })
            })
                .then(response => response.json())
                .then(data => {
                    setOutput(data.run.output);
                }
                );

        } catch (e) {
            setOutput('Error: ' + e.message);
        }

    }

    return (
        <div className={styles.sandbox + " " + windowStyle.window}>

            <WindowBar />
            <Editor
                className={styles['editor-container']}
                height={(height + 10) + 'vh'}
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
