import React, { useState } from 'react';
import { ListComparatorIcon } from '../components/icons/ListComparatorIcon';

const ListComparatorPage: React.FC = () => {
  const [listA, setListA] = useState<string>('');
  const [listB, setListB] = useState<string>('');
  const [aOnly, setAOnly] = useState<string>('');
  const [bOnly, setBOnly] = useState<string>('');
  const [inBoth, setInBoth] = useState<string>('');

  const handleCompare = () => {
    const setA = new Set(listA.split('\n').filter(line => line.trim() !== ''));
    const setB = new Set(listB.split('\n').filter(line => line.trim() !== ''));

    const aOnlyItems = [...setA].filter(item => !setB.has(item));
    const bOnlyItems = [...setB].filter(item => !setA.has(item));
    const bothItems = [...setA].filter(item => setB.has(item));

    setAOnly(aOnlyItems.join('\n'));
    setBOnly(bOnlyItems.join('\n'));
    setInBoth(bothItems.join('\n'));
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <ListComparatorIcon className="w-10 h-10 text-cyan-700" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">List Comparator (Diff)</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="list-a" className="block text-sm font-medium text-gray-700 mb-1">List A</label>
          <textarea id="list-a" value={listA} onChange={(e) => setListA(e.target.value)} className="w-full h-64 p-3 border rounded-lg" />
        </div>
        <div>
          <label htmlFor="list-b" className="block text-sm font-medium text-gray-700 mb-1">List B</label>
          <textarea id="list-b" value={listB} onChange={(e) => setListB(e.target.value)} className="w-full h-64 p-3 border rounded-lg" />
        </div>
      </div>
      <button onClick={handleCompare} className="px-5 py-2.5 bg-cyan-700 text-white font-bold rounded-lg hover:bg-cyan-800 transition shadow-md mb-6">
        Compare Lists
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">In List A Only</label>
          <textarea value={aOnly} readOnly className="w-full h-48 p-3 border rounded-lg bg-red-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">In List B Only</label>
          <textarea value={bOnly} readOnly className="w-full h-48 p-3 border rounded-lg bg-blue-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">In Both Lists</label>
          <textarea value={inBoth} readOnly className="w-full h-48 p-3 border rounded-lg bg-green-50" />
        </div>
      </div>
    </div>
  );
};

export default ListComparatorPage;
