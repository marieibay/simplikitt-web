import React, { useState } from 'react';
import { HtaccessAuthGeneratorIcon } from '../components/icons/HtaccessAuthGeneratorIcon';

const HtaccessAuthGeneratorPage: React.FC = () => {
    const [authName, setAuthName] = useState('Restricted Area');
    const [htpasswdPath, setHtpasswdPath] = useState('/var/www/html/.htpasswd');
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('');
    const [copied, setCopied] = useState<string | null>(null);

    const htaccessCode = `AuthType Basic
AuthName "${authName}"
AuthUserFile "${htpasswdPath}"
Require valid-user`;
    
    // htpasswd uses a modified APR1-MD5 or bcrypt, which are complex to implement client-side.
    // We will provide the unhashed version and a strong warning.
    const htpasswdCode = `${username}:${password}`;

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="container mx-auto p-4 md:p-8">
            <div className="flex items-center gap-4 mb-8">
                <HtaccessAuthGeneratorIcon className="w-10 h-10 text-indigo-500" />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">.htaccess Auth Generator</h1>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border max-w-3xl mx-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Auth Name</label>
                        <input value={authName} onChange={e => setAuthName(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
                    </div>
                    <div>
                        <label className="block font-medium">Full Path to .htpasswd</label>
                        <input value={htpasswdPath} onChange={e => setHtpasswdPath(e.target.value)} className="w-full p-2 border rounded-md mt-1 font-mono"/>
                    </div>
                    <div>
                        <label className="block font-medium">Username</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
                    </div>
                    <div>
                        <label className="block font-medium">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded-md mt-1"/>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-lg">1. Add to your `.htaccess` file</h3>
                        <div className="relative">
                            <pre className="p-4 bg-gray-800 text-white rounded-md font-mono text-sm overflow-x-auto">{htaccessCode}</pre>
                            <button onClick={() => copyToClipboard(htaccessCode, 'htaccess')} className="absolute top-2 right-2 px-3 py-1 bg-gray-600 rounded text-white">{copied === 'htaccess' ? 'Copied!' : 'Copy'}</button>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">2. Create your `.htpasswd` file</h3>
                         <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-md" role="alert">
                            <p className="font-bold">Security Warning!</p>
                            <p>For security, you must hash the password on your server. Run the following command on your server: <code className="bg-red-200 p-1 rounded">{`htpasswd -c ${htpasswdPath} ${username}`}</code>. Do not use the plain text below in production.</p>
                        </div>
                        <div className="relative">
                            <pre className="p-4 bg-gray-800 text-white rounded-md font-mono text-sm overflow-x-auto">{htpasswdCode}</pre>
                             <button onClick={() => copyToClipboard(htpasswdCode, 'htpasswd')} className="absolute top-2 right-2 px-3 py-1 bg-gray-600 rounded text-white">{copied === 'htpasswd' ? 'Copied!' : 'Copy'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HtaccessAuthGeneratorPage;
