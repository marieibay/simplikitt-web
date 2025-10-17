import React, { useState } from 'react';
import { HtmlTagStripperIcon } from '../components/icons/HtmlTagStripperIcon';

const HtmlTagStripperPage: React.FC = () => {
    const [input, setInput] = useState('<p>This is <b>bold</b> and <i>italic</i> text.</p>');
    const [output, setOutput] = useState('');

    const stripTags = () => {
        setOutput(input.replace(/<[^>]+>/g, ''));
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <HtmlTagStripperIcon className="w-10 h-10 text-orange-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">HTML Tag Stripper</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <textarea value={input} onChange={e => setInput(e.target.value)} className="w-full h-64 p-2 border rounded font-mono" placeholder="Paste HTML here..."/>
                <textarea value={output} readOnly className="w-full h-64 p-2 border rounded bg-gray-100 font-mono" />
            </div>
            <button onClick={stripTags} className="mt-4 px-4 py-2 bg-orange-500 text-white rounded">Strip Tags</button>
        </div>
    );
};

export default HtmlTagStripperPage;
