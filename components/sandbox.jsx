import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const Sandbox = ({ height=50,lang="java",initialCode="", keywords }) => {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState("Click Verify to check your code");

    function handleEditorChange(value, event) {
        setCode(value);
        setOutput("");
    }

    function verifyCode() {
        // Split code into individual tokens
        const tokens = code.split(/\b/);

        let currentIndex = 0;
        let tokenIndex = 0;

        while (tokenIndex < tokens.length && currentIndex < keywords.length) {
            const token = tokens[tokenIndex].trim();
            const keyword = keywords[currentIndex];

            if (token === keyword) {
                currentIndex++;
            }

            tokenIndex++;
        }

        if (currentIndex === keywords.length) {
            setOutput('Code verification result: Passed');
        } else {
            setOutput('Code verification result: Failed');
        }
    }




    return (
        <div>
            <Editor
                height={height + "vh"}
                defaultLanguage={lang}
                theme='vs-dark'
                defaultValue={code}
                onChange={handleEditorChange}
            />

            <div>
                <button onClick={verifyCode}>Verify</button>
            </div>
            <div>
                <pre>
                    {output}
                </pre>
            </div>
        </div>
    );
}

export default Sandbox;
