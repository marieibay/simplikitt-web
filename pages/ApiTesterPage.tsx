import React, { useState } from 'react';
import { ApiTesterIcon } from '../components/icons/ApiTesterIcon';

const ApiTesterPage: React.FC = () => {
    const [method, setMethod] = useState('GET');
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts/1');
    const [headers, setHeaders] = useState([{ key: 'Content-Type', value: 'application/json' }]);
    const [body, setBody] = useState('');
    const [response, setResponse] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleHeaderChange = (index: number, field: 'key' | 'value', value: string) => {
        const newHeaders = [...headers];
        newHeaders[index][field] = value;
        setHeaders(newHeaders);
    };
    
    const addHeader = () => setHeaders([...headers, { key: '', value: '' }]);
    const removeHeader = (index: number) => setHeaders(headers.filter((_, i) => i !== index));

    const handleSend = async () => {
        setIsLoading(true);
        setResponse(null);
        try {
            const fetchHeaders = new Headers();
            headers.forEach(h => {
                if (h.key) fetchHeaders.append(h.key, h.value);
            });
            
            const options: RequestInit = {
                method,
                headers: fetchHeaders,
            };

            if (method !== 'GET' && method !== 'HEAD') {
                options.body = body;
            }

            const res = await fetch(url, options);

            const resHeaders: { [key: string]: string } = {};
            res.headers.forEach((value, key) => {
                resHeaders[key] = value;
            });
            
            const resBody = await res.text();
            let prettyBody = resBody;
            try {
                prettyBody = JSON.stringify(JSON.parse(resBody), null, 2);
            } catch {}

            setResponse({
                status: res.status,
                statusText: res.statusText,
                headers: resHeaders,
                body: prettyBody,
            });

        } catch (err) {
            if (err instanceof Error) {
                setResponse({ status: 'Error', statusText: 'Network Request Failed', body: `${err.message}. Note: Cross-Origin (CORS) errors are common and must be handled server-side.` });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <ApiTesterIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">API Tester</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border space-y-4">
                <div className="flex gap-2">
                    <select value={method} onChange={e => setMethod(e.target.value)} className="p-2 border rounded-md bg-gray-100">
                        {['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'].map(m => <option key={m}>{m}</option>)}
                    </select>
                    <input value={url} onChange={e => setUrl(e.target.value)} className="w-full p-2 border rounded-md font-mono" placeholder="https://api.example.com/data" />
                    <button onClick={handleSend} disabled={isLoading} className="px-6 py-2 bg-indigo-500 text-white font-bold rounded-lg disabled:opacity-50">
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 className="font-semibold mb-2">Headers</h3>
                        {headers.map((h, i) => (
                            <div key={i} className="flex gap-2 mb-2 items-center">
                                <input value={h.key} onChange={e => handleHeaderChange(i, 'key', e.target.value)} className="w-full p-1 border rounded font-mono text-sm" placeholder="Key" />
                                <input value={h.value} onChange={e => handleHeaderChange(i, 'value', e.target.value)} className="w-full p-1 border rounded font-mono text-sm" placeholder="Value" />
                                <button onClick={() => removeHeader(i)} className="text-red-500 font-bold text-xl">&times;</button>
                            </div>
                        ))}
                        <button onClick={addHeader} className="text-sm text-indigo-600 font-semibold">+ Add Header</button>
                    </div>
                     <div>
                        <h3 className="font-semibold mb-2">Body (JSON, Text, etc.)</h3>
                        <textarea value={body} onChange={e => setBody(e.target.value)} className="w-full h-40 p-2 border rounded font-mono text-sm" disabled={method === 'GET' || method === 'HEAD'} />
                    </div>
                </div>

                {response && (
                     <div>
                        <h2 className="text-xl font-bold mt-6">Response</h2>
                         <div className="my-2"><span className="font-bold">Status:</span> <span className={`font-semibold ${response.status >= 400 ? 'text-red-500' : 'text-green-600'}`}>{response.status} {response.statusText}</span></div>
                        <h3 className="font-semibold mt-4 mb-2">Body</h3>
                        <pre className="p-4 bg-gray-900 text-white rounded-md max-h-96 overflow-auto text-sm">{response.body}</pre>
                         <h3 className="font-semibold mt-4 mb-2">Headers</h3>
                        <pre className="p-4 bg-gray-100 rounded-md max-h-48 overflow-auto text-sm">{JSON.stringify(response.headers, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApiTesterPage;
