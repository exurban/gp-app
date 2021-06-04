import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { FavoritesDocument } from '../graphql-operations';
import router from 'next/router';
import React from 'react';
import { BadgePrimary } from './Badge';

const FavoritesMenuItem = (): JSX.Element => {
  const showFavorites = () => {
    router.push(`/gallery/user/favorites`);
  };

  const { data } = useQuery(FavoritesDocument);

  const favoritesCount = useMemo(() => {
    return data?.favorites.photoList ? data.favorites.photoList.length : 0;
  }, [data]);

  const StarIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 lg:h-7 xl:h-8 2xl:h-9 w-6 lg:w-7 xl:w-8 2xl:w-9 dark:color-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    );
  };

  return (
    <button
      className="mr-6 text-coolGray-800 hover:text-purple-600 dark:text-white dark:hover:text-purple-500 relative p-2"
      aria-label="favorites"
      onClick={() => showFavorites()}
    >
      <StarIcon />
      {favoritesCount > 0 ? <BadgePrimary text={favoritesCount} /> : null}
    </button>
  );
};

export default FavoritesMenuItem;
