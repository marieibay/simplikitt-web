import React, { useState, useMemo } from 'react';
import { RegexTesterIcon } from '../components/icons/RegexTesterIcon';

const RegexTesterPage: React.FC = () => {
    const [regex, setRegex] = useState('\\b\\w{4}\\b');
    const [flags, setFlags] = useState('g');
    const [testString, setTestString] = useState('This is a test string for regex.');

    const highlighted = useMemo(() => {
        try {
            const re = new RegExp(regex, flags);
            return testString.replace(re, match => `<span class="bg-yellow-300">${match}</span>`);
        } catch (e) {
            return 'Invalid Regex';
        }
    }, [regex, flags, testString]);

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <RegexTesterIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Regex Tester</h1>
            </div>
            <div className="space-y-4">
                <div className="flex gap-4">
                    <input value={`/${regex}/${flags}`} onChange={e => {
                        const parts = e.target.value.match(/\/(.*)\/(.*)?/);
                        if(parts) {
                            setRegex(parts[1] || '');
                            setFlags(parts[2] || '');
                        }
                    }} className="w-full p-2 border rounded font-mono" placeholder="/regex/flags" />
                </div>
                <textarea value={testString} onChange={e => setTestString(e.target.value)} className="w-full h-48 p-2 border rounded font-mono" placeholder="Test string..."></textarea>
                <div className="p-4 bg-gray-100 rounded border min-h-[12rem]" dangerouslySetInnerHTML={{ __html: highlighted }}></div>
            </div>
        </div>
    );
};

export default RegexTesterPage;
