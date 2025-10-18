import React, { useState, useMemo } from 'react';
import { HttpStatusCodeLookupIcon } from '../components/icons/HttpStatusCodeLookupIcon';

const statusCodes: { [key: string]: string } = {
  '200': 'OK',
  '201': 'Created',
  '204': 'No Content',
  '301': 'Moved Permanently',
  '302': 'Found',
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '403': 'Forbidden',
  '404': 'Not Found',
  '500': 'Internal Server Error',
  '503': 'Service Unavailable',
};

const HttpStatusCodeLookupPage: React.FC = () => {
  const [code, setCode] = useState('200');
  
  const description = useMemo(() => {
    return statusCodes[code] || 'Unknown Status Code';
  }, [code]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <HttpStatusCodeLookupIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">HTTP Status Code Lookup</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4 text-center">
        <div>
          <label htmlFor="code-input" className="block font-medium">Enter HTTP Status Code</label>
          <input 
            type="text" 
            id="code-input" 
            value={code} 
            onChange={e => setCode(e.target.value)} 
            className="w-full p-2 border rounded-md mt-1 text-center text-xl"
            list="status-codes"
          />
          <datalist id="status-codes">
            {Object.keys(statusCodes).map(c => <option key={c} value={c} />)}
          </datalist>
        </div>
        <div>
            <p className="text-4xl font-bold text-indigo-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HttpStatusCodeLookupPage;
