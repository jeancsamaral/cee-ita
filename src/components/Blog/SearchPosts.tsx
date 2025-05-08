'use client';

import { useState } from 'react';
import RelatedPost from './RelatedPost';

interface SearchPostsProps {
  allPosts: any[];
  currentPostId: string;
}

const SearchPosts = ({ allPosts, currentPostId }: SearchPostsProps) => {
  const [searchResults, setSearchResults] = useState(
    allPosts.filter((p) => p.id !== currentPostId).slice(0, 3)
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPosts = allPosts
      .filter((p) => p.id !== currentPostId)
      .filter((p) => 
        p.properties.Title.title[0]?.plain_text.toLowerCase().includes(searchTerm)
      )
      .slice(0, 3);
    
    setSearchResults(filteredPosts);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Buscar por título..."
          className="mr-4 w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
          onChange={handleSearch}
        />
        <button
          aria-label="search button"
          className="flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-sm bg-primary text-white"
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="mt-6">
        <h3 className="border-b border-stroke px-8 py-4 text-lg font-semibold text-black dark:border-stroke-dark dark:text-white">
          Posts Relacionados
        </h3>
        <ul className="p-8">
          {searchResults.map((post: any, index: number) => (
            <li key={post.id} className={`${index < searchResults.length - 1 ? 'mb-6 border-b border-stroke pb-6 dark:border-stroke-dark' : ''}`}>
              <RelatedPost
                title={post.properties.Title.title[0]?.plain_text || "Sem título"}
                image={post.properties.cover?.files[0]?.file?.url || post.properties.cover?.files[0]?.external?.url || "/images/blog/blog-03.jpg"}
                slug={`/blogs-2/${post.properties.slug.rich_text[0]?.plain_text}`}
                date={new Date(post.created_time).toDateString().split(" ").slice(1).join(" ")}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchPosts; 