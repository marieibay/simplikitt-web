import React, { useState } from 'react';
import { ListIntersectorIcon } from '../components/icons/ListIntersectorIcon';

const ListIntersectorPage: React.FC = () => {
  const [listA, setListA] = useState<string>('');
  const [listB, setListB] = useState<string>('');
  const [inBoth, setInBoth] = useState<string>('');

  const handleIntersect = () => {
    const setA = new Set(listA.split('\n').filter(line => line.trim() !== ''));
    const setB = new Set(listB.split('\n').filter(line => line.trim() !== ''));
    const bothItems = [...setA].filter(item => setB.has(item));
    setInBoth(bothItems.join('\n'));
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ListIntersectorIcon className="w-10 h-10 text-green-700" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">List Intersector</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <label htmlFor="list-a" className="block text-sm font-medium text-gray-700 mb-1">List A</label>
          <textarea id="list-a" value={listA} onChange={(e) => setListA(e.target.value)} className="w-full h-80 p-3 border rounded-lg" />
        </div>
        <div className="lg:col-span-1">
          <label htmlFor="list-b" className="block text-sm font-medium text-gray-700 mb-1">List B</label>
          <textarea id="list-b" value={listB} onChange={(e) => setListB(e.target.value)} className="w-full h-80 p-3 border rounded-lg" />
        </div>
        <div className="lg:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Common Lines</label>
          <textarea value={inBoth} readOnly className="w-full h-80 p-3 border rounded-lg bg-gray-50" />
        </div>
      </div>
       <button onClick={handleIntersect} className="mt-6 px-5 py-2.5 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition shadow-md">
        Find Common Lines
      </button>
    </div>
  );
};

export default ListIntersectorPage;
