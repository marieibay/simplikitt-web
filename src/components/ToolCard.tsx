
import React from 'react';
import { Link } from 'react-router-dom';
import { Tool } from '../types';
import { LockIcon } from './icons/LockIcon';
import { categoryDetails } from '../constants/categories';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { name, description, path, Icon, category, isPremium } = tool;

  const details = categoryDetails[category as keyof typeof categoryDetails];
  const colorName = details ? details.colorName : 'indigo';

  const textColors: { [key: string]: string } = {
    orange: 'text-orange-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-violet-600',
    teal: 'text-cyan-600',
    indigo: 'text-indigo-600',
  };

  const bgColors: { [key: string]: string } = {
    orange: 'bg-orange-100',
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    purple: 'bg-violet-100',
    teal: 'bg-cyan-100',
    indigo: 'bg-indigo-100',
  };

  const textColor = textColors[colorName] || 'text-gray-600';
  const bgColor = bgColors[colorName] || 'bg-gray-100';

  return (
    <Link 
      to={path} 
      className="group relative block p-4 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200/80"
    >
      {isPremium && (
        <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 z-10">
          <LockIcon className="w-3 h-3" />
          <span>PRO</span>
        </div>
      )}
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 p-2 rounded-lg ${bgColor} ${textColor}`}>
            <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-800 leading-tight">{name}</h3>
          <p className={`text-xs font-semibold ${textColor}`}>{category}</p>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  );
};
