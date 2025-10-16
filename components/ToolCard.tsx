
import React from 'react';
import { Link } from 'react-router-dom';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { name, description, path, Icon, borderColor } = tool;

  return (
    <Link to={path} className={`group block p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 ${borderColor}`}>
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-lg bg-gray-100 ${borderColor.replace('border-', 'text-')}`}>
            <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{name}</h3>
          <p className="mt-1 text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};
