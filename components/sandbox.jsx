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
        let temp = code;
       // ckeck if all keywords are present in code
         let missingKeywords = [];
            keywords.forEach(keyword => {
                if (!temp.includes(keyword)) {
                    missingKeywords.push(keyword);
                }
                else {
                    let index = temp.indexOf(keyword);
                    temp = temp.substring(index, temp.length);
                    temp = temp.replace(keyword, "");
                }
            }
            );
            if (missingKeywords.length > 0) {
                setOutput("You are missing: " + missingKeywords.join(", "));
            }
            else {
                setOutput("Congratulations! Your code is correct!");
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
