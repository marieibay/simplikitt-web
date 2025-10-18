import React, { useState } from 'react';
import { CodeSnippetRunnerIcon } from '../components/icons/CodeSnippetRunnerIcon';

const CodeSnippetRunnerPage: React.FC = () => {
    const [html, setHtml] = useState('<h1>Hello, World!</h1>\n<p>Edit the code to see it live.</p>');
    const [css, setCss] = useState('body {\n  background-color: #f0f0f0;\n  font-family: sans-serif;\n  padding: 2rem;\n  text-align: center;\n}');
    const [js, setJs] = useState('// Your script here...\n// console.log() will appear in the browser dev tools.');
    const [srcDoc, setSrcDoc] = useState('');

    const handleRun = () => {
        setSrcDoc(`
            <html>
                <head><style>${css}</style></head>
                <body>
                    ${html}
                    <script>${js}</script>
                </body>
            </html>
        `);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <CodeSnippetRunnerIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Code Snippet Runner</h1>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <h3 className="font-semibold mb-1">HTML</h3>
                        <textarea value={html} onChange={e => setHtml(e.target.value)} className="w-full h-48 p-2 border rounded font-mono text-sm" />
                    </div>
                     <div>
                        <h3 className="font-semibold mb-1">CSS</h3>
                        <textarea value={css} onChange={e => setCss(e.target.value)} className="w-full h-48 p-2 border rounded font-mono text-sm" />
                    </div>
                     <div>
                        <h3 className="font-semibold mb-1">JavaScript</h3>
                        <textarea value={js} onChange={e => setJs(e.target.value)} className="w-full h-48 p-2 border rounded font-mono text-sm" />
                    </div>
                </div>
                <button onClick={handleRun} className="px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition shadow-md">Run Snippet</button>

                <div>
                    <h3 className="font-semibold mb-2">Result</h3>
                    <iframe
                        srcDoc={srcDoc}
                        title="output"
                        sandbox="allow-scripts"
                        frameBorder="0"
                        width="100%"
                        height="400px"
                        className="border bg-white rounded-lg shadow-inner"
                    />
                </div>
            </div>
        </div>
    );
};

export default CodeSnippetRunnerPage;
