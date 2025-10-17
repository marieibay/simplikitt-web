import React, { useState } from 'react';
import { HttpStatusCodeLookupIcon } from '../components/icons/HttpStatusCodeLookupIcon';

const statusCodes: { [key: string]: string } = {
  '100': 'Continue', '101': 'Switching Protocols', '102': 'Processing',
  '200': 'OK', '201': 'Created', '202': 'Accepted', '204': 'No Content',
  '300': 'Multiple Choices', '301': 'Moved Permanently', '302': 'Found', '304': 'Not Modified',
  '400': 'Bad Request', '401': 'Unauthorized', '403': 'Forbidden', '404': 'Not Found', '405': 'Method Not Allowed',
  '500': 'Internal Server Error', '501': 'Not Implemented', '502': 'Bad Gateway', '503': 'Service Unavailable', '504': 'Gateway Timeout',
};

const HttpStatusCodeLookupPage: React.FC = () => {
  const [code, setCode] = useState('404');
  const [description, setDescription] = useState(statusCodes['404']);

  const handleCodeChange = (value: string) => {
    setCode(value);
    setDescription(statusCodes[value] || 'Unknown Code');
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <HttpStatusCodeLookupIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">HTTP Status Code Lookup</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border max-w-lg mx-auto space-y-4 text-center">
        <input 
          type="number"
          value={code}
          onChange={e => handleCodeChange(e.target.value)}
          className="w-full p-2 border rounded-md text-center text-xl"
          placeholder="Enter HTTP status code..."
        />
        <p className="text-4xl font-bold text-indigo-600 min-h-[48px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HttpStatusCodeLookupPage;
