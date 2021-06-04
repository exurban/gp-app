import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { ShoppingBagItemsDocument } from '../graphql-operations';
import { BadgePrimary } from '../components/Badge';

const ShoppingBagMenuItem = (): JSX.Element => {
  const showShoppingBag = () => {
    console.log(`show shopping bag`);
  };

  const { data } = useQuery(ShoppingBagItemsDocument);

  const shoppingBagItemsCount = useMemo(() => {
    return data?.shoppingBagItems.dataList
      ? data.shoppingBagItems.dataList.length
      : 0;
  }, [data]);

  const ShoppingBagIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 lg:h-7 xl:h-8 2xl:h-9 w-6 lg:w-7 xl:w-8 2xl:w-9"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    );
  };

  return (
    <button
      className="mr-6 text-coolGray-800 hover:text-purple-600 dark:text-white dark:hover:text-purple-500 relative p-2"
      aria-label="shopping bag"
      onClick={() => showShoppingBag()}
    >
      <ShoppingBagIcon />
      {shoppingBagItemsCount > 0 ? (
        <BadgePrimary text={shoppingBagItemsCount} />
      ) : null}
    </button>
  );
};

export default ShoppingBagMenuItem;
