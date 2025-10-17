import React from 'react';
import { PdfPageInserterIcon } from '../components/icons/PdfPageInserterIcon';
import { LockIcon } from '../components/icons/LockIcon';

const PdfPageInserterPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <PdfPageInserterIcon className="w-10 h-10 text-green-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">PDF Page Inserter</h1>
      </div>
      <div className="p-8 md:p-12 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
        <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
          <LockIcon className="w-8 h-8 text-yellow-500" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-gray-800">Premium Feature</h2>
        <p className="mt-2 text-gray-600 max-w-md mx-auto">
          Inserting pages into a PDF is a premium feature. Please upgrade to unlock this tool.
        </p>
        <button className="mt-8 px-8 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition shadow-lg text-lg">
          Unlock with Premium
        </button>
      </div>
    </div>
  );
};

export default PdfPageInserterPage;
