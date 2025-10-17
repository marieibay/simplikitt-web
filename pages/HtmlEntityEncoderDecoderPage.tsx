import React, { useState } from 'react';
import { HtmlEntityEncoderDecoderIcon } from '../components/icons/HtmlEntityEncoderDecoderIcon';

const HtmlEntityEncoderDecoderPage: React.FC = () => {
    const [input, setInput] = useState('<p>"Hello & World"</p>');
    const [output, setOutput] = useState('');

    const encode = () => {
        const el = document.createElement('div');
        el.innerText = input;
        setOutput(el.innerHTML);
    };

    const decode = () => {
        const el = document.createElement('textarea');
        el.innerHTML = input;
        setOutput(el.value);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <HtmlEntityEncoderDecoderIcon className="w-10 h-10 text-orange-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">HTML Entity Encoder/Decoder</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-64 p-2 border rounded font-mono" />
                <textarea value={output} readOnly className="w-full h-64 p-2 border rounded bg-gray-100 font-mono" />
            </div>
            <div className="mt-4 flex gap-4">
                <button onClick={encode} className="px-4 py-2 bg-orange-500 text-white rounded">Encode</button>
                <button onClick={decode} className="px-4 py-2 bg-orange-500 text-white rounded">Decode</button>
            </div>
        </div>
    );
};

export default HtmlEntityEncoderDecoderPage;
