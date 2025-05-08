'use client';

import { useState } from 'react';

interface SearchBlogsProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBlogs = ({ onSearch }: SearchBlogsProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative group">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 bg-white/30 backdrop-blur-sm border border-gray-100 rounded-full shadow-sm 
                 text-sm text-gray-600 placeholder-gray-400
                 focus:outline-none focus:ring-1 focus:ring-blue-500/10 focus:border-blue-500/30
                 transition-all duration-200 ease-in-out
                 hover:border-gray-200"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBlogs; 