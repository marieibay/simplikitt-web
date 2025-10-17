import React, { useState, useMemo } from 'react';
import { UrlParserIcon } from '../components/icons/UrlParserIcon';

const UrlParserPage: React.FC = () => {
  const [url, setUrl] = useState('https://www.example.com:8080/path/to/page?query=value&param=123#section');

  const parsedUrl = useMemo(() => {
    try {
      const u = new URL(url);
      return {
        protocol: u.protocol,
        hostname: u.hostname,
        port: u.port,
        pathname: u.pathname,
        search: u.search,
        hash: u.hash,
      };
    } catch {
      return null;
    }
  }, [url]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <UrlParserIcon className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">URL Parser</h1>
      </div>
      <div className="space-y-4">
        <input value={url} onChange={e => setUrl(e.target.value)} className="w-full p-2 border rounded font-mono" />
        {parsedUrl ? (
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(parsedUrl).map(([key, value]) => (
              <div key={key} className="bg-gray-100 p-2 rounded">
                <span className="font-bold">{key}:</span> {value}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500">Invalid URL</p>
        )}
      </div>
    </div>
  );
};

export default UrlParserPage;
