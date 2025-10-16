
import React from 'react';

interface CategoryCardProps {
  title: string;
  description: string;
  // Fix: Changed Icon prop type to be more generic to accept both SVG and image-based icon components.
  Icon: React.ComponentType<{ className?: string }>;
  colorName: string;
  href: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, Icon, colorName, href }) => {
  const colors = {
    orange: { bg: 'bg-orange-500', text: 'text-orange-500' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-500' },
    green: { bg: 'bg-green-500', text: 'text-green-500' },
    purple: { bg: 'bg-violet-500', text: 'text-violet-500' },
    teal: { bg: 'bg-cyan-400', text: 'text-cyan-400' },
    indigo: { bg: 'bg-blue-700', text: 'text-blue-700' },
  };

  const selectedColor = colors[colorName as keyof typeof colors] || colors.blue;

  return (
    <a href={href} className={`group block flex-1 min-w-0 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out ${selectedColor.bg}`}>
      <div className="p-6 flex items-center justify-center">
        <Icon className={`w-12 h-12 ${selectedColor.text}`} />
      </div>
      <div className="bg-slate-50 p-4 m-2 mb-3 -mt-2 rounded-xl border border-slate-200/80">
        <h3 className="text-lg font-bold text-gray-900 leading-tight">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </a>
  );
};
