import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useQuery, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/client';
import {
  FavoritesDocument,
  AddPhotoToFavoritesDocument,
  RemovePhotoFromFavoritesDocument,
  PhotoInfoFragment,
  ShoppingBagItemsDocument,
} from '../graphql-operations';
import { Menu, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';

const DotsVertical = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-coolGray-800 dark:text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
      />
    </svg>
  );
};

const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const ExpandIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
      />
    </svg>
  );
};

const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

const ViewIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
};

type Props = {
  photo: PhotoInfoFragment;
};

const SlideMenu: React.FC<Props> = ({ photo }) => {
  const [session] = useSession();
  const router = useRouter();
  const [addToFavorites] = useMutation(AddPhotoToFavoritesDocument);
  const [removeFromFavorites] = useMutation(RemovePhotoFromFavoritesDocument);

  const toastSuccess = (msg: string) => {
    console.log(`Success toast.`);
    toast.success(msg);
  };

  const toastFail = (msg: string) => {
    console.log(`Warning toast.`);
    toast.warning(msg);
  };

  const signinFirst = () => {
    localStorage.setItem('redirectUrl', router.pathname);
    localStorage.setItem('favPhoto', photo.id);
    router.push('/auth/signin');
  };

  const showInCarousel = () => {
    let { pathname } = router;

    if (!pathname || typeof pathname !== 'string') {
      return;
    }

    if (pathname.includes(`gallery`)) {
      pathname = pathname.replace(`gallery`, `carousel`);
    }

    if (pathname.includes(`/[name]`)) {
      pathname = pathname.replace(`/[name]`, '');
      const { name } = router.query;

      router.push({
        pathname: `${pathname}/${name}`,
        query: { sku: photo?.sku },
      });
    } else {
      router.push({
        pathname: `${pathname}/`,
        query: { sku: photo?.sku },
      });
    }
  };

  const addPhotoToFavorites = () => {
    if (!session) {
      signinFirst();
      return;
    }

    let success;
    let msg;

    addToFavorites({
      variables: { photoId: parseInt(photo.id) },
      optimisticResponse: {
        __typename: 'Mutation',
        addPhotoToFavorites: {
          success: true,
          message: `Added ${photo.title} to your favorites.`,
          addedPhotoWithId: photo.id,
          __typename: 'AddPhotoToFavoritesResponse',
        },
      },
      update: (cache, { data: { ...newPhotoResponse } }) => {
        const { ...existing } = cache.readQuery({
          query: FavoritesDocument,
        });

        const response = newPhotoResponse.addPhotoToFavorites;
        success = response.success;
        msg = response.message;

        const existingPhotos = existing.favorites?.photoList || [];

        cache.writeQuery({
          query: FavoritesDocument,
          data: {
            favorites: {
              __typename: 'FavoritesResponse',
              photoList: photo
                ? [photo, ...existingPhotos]
                : [...existingPhotos],
            },
          },
        });
      },
    });
    {
      success
        ? toastSuccess(msg ? msg : 'Success!')
        : toastFail(msg ? msg : 'Failed.');
    }
  };

  const removePhotoFromFavorites = () => {
    console.log(`removing from favorites.`);
    if (!session) {
      signinFirst();
      return;
    }

    let success;
    let msg;

    removeFromFavorites({
      variables: { photoId: parseInt(photo.id) },
      optimisticResponse: {
        __typename: 'Mutation',
        removePhotoFromFavorites: {
          success: true,
          message: `Successfully removed ${photo.title} from your favorites.`,
          removedPhotoWithId: photo.id,
          __typename: 'RemovePhotoFromFavoritesResponse',
        },
      },
      update: (cache, { data: { ...removePhotoResponse } }) => {
        const { ...existing } = cache.readQuery({
          query: FavoritesDocument,
        });

        const response = removePhotoResponse.removePhotoFromFavorites;
        const idOfPhotoToRemove = response.removedPhotoWithId;
        success = response.success;
        msg = response.message;

        const existingPhotos = existing.favorites?.photoList || [];

        cache.writeQuery({
          query: FavoritesDocument,
          data: {
            favorites: {
              __typename: 'FavoritesResponse',
              photoList: existingPhotos.filter(
                (rec) => rec.id != idOfPhotoToRemove
              ),
            },
          },
        });
      },
    });
    {
      success
        ? toastSuccess(msg ? msg : 'Success!')
        : toastFail(msg ? msg : 'Failed.');
    }
    removeFromFavorites({
      variables: { photoId: parseInt(photo.id) },
      update: (cache, { data: { ...removePhotoResponse } }) => {
        const { ...existing } = cache.readQuery({
          query: FavoritesDocument,
        });
        const photoToRemove =
          removePhotoResponse.removePhotoFromFavorites.removedPhotoWithId;
        const existingPhotos = existing.favorites?.photoList || [];

        cache.writeQuery({
          query: FavoritesDocument,
          data: {
            favorites: {
              __typename: 'FavoritesResponse',
              photoList: existingPhotos.filter(
                (rec) => rec.id != photoToRemove
              ),
            },
          },
        });
      },
    });
  };

  const addToShoppingBag = () => {
    router.push(`/shop/options/${photo.sku}`);
  };

  const viewInShoppingBag = () => {
    router.push(`/shop/review-order`);
  };

  const { data: favs } = useQuery(FavoritesDocument);
  const inFavorites = useMemo(() => {
    const favIds = favs?.favorites?.photoList?.map((f) => f.id);
    return favIds ? favIds.includes(photo.id) : false;
  }, [favs]);

  const { data: bagItems } = useQuery(ShoppingBagItemsDocument);
  const inShoppingBag = useMemo(() => {
    const bagItemIds = bagItems?.shoppingBagItems?.dataList?.map(
      (b) => b.photo.id
    );
    return bagItemIds ? bagItemIds.includes(photo.id) : false;
  }, [bagItems]);

  return (
    <div className="flex items-center justify-center p-2">
      <div className="relative inline-block text-left">
        <Menu>
          {({ open }) => (
            <>
              <span className="rounded-md shadow-sm">
                <Menu.Button
                  className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md bg-white dark:bg-coolGray-800 hover:text-gray-500 dark:hover:bg-coolGray-700 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                  aria-label="show slide menu"
                >
                  <DotsVertical />
                </Menu.Button>
              </span>

              <Transition
                show={open}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-coolGray-700 border border-gray-200 dark:border-coolGray-800 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                >
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          aria-label="info"
                          href={`/image/${photo.sku}`}
                          className={`${
                            active
                              ? 'bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50'
                              : 'text-gray-700 dark:text-coolGray-100'
                          }  flex items-center w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          <InfoIcon /> <p className="ml-2">Info</p>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item onClick={() => showInCarousel()}>
                      {({ active }) => (
                        <a
                          aria-label="view larger"
                          href={`#/carousel/subject/land/${photo.sku}`}
                          className={`${
                            active
                              ? 'bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50'
                              : 'text-gray-700 dark:text-coolGray-100'
                          }  flex items-center w-full px-4 py-2 text-sm leading-5 text-left`}
                        >
                          <ExpandIcon /> <p className="ml-2">View Larger</p>
                        </a>
                      )}
                    </Menu.Item>
                    {inFavorites ? (
                      <Menu.Item onClick={() => removePhotoFromFavorites()}>
                        {({ active }) => (
                          <a
                            aria-label="remove from favorites"
                            href="#favorites"
                            className={`${
                              active
                                ? 'bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50'
                                : 'text-gray-700 dark:text-coolGray-100'
                            }  flex items-center w-full px-4 py-2 text-sm leading-5 text-left`}
                          >
                            <MinusIcon />{' '}
                            <p className="ml-2">Remove from Favorites</p>
                          </a>
                        )}
                      </Menu.Item>
                    ) : (
                      <Menu.Item onClick={() => addPhotoToFavorites()}>
                        {({ active }) => (
                          <a
                            aria-label="add to favorites"
                            href="#favorites"
                            className={`${
                              active
                                ? 'bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50'
                                : 'text-gray-700 dark:text-coolGray-100'
                            }  flex items-center w-full px-4 py-2 text-sm leading-5 text-left`}
                          >
                            <PlusIcon />{' '}
                            <p className="ml-2">Add to Favorites</p>
                          </a>
                        )}
                      </Menu.Item>
                    )}

                    {inShoppingBag ? (
                      <Menu.Item onClick={() => viewInShoppingBag()}>
                        {({ active }) => (
                          <a
                            aria-label="view in shopping bag"
                            href="/shop/review-order"
                            className={`${
                              active
                                ? 'bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50'
                                : 'text-gray-700 dark:text-coolGray-100'
                            }  flex items-center w-full px-4 py-2 text-sm leading-5 text-left`}
                          >
                            <ViewIcon />{' '}
                            <p className="ml-2">View in Shopping Bag</p>
                          </a>
                        )}
                      </Menu.Item>
                    ) : (
                      <Menu.Item onClick={() => addToShoppingBag()}>
                        {({ active }) => (
                          <a
                            aria-label="add to shopping bag"
                            href="#shoppingBag"
                            className={`${
                              active
                                ? 'bg-gray-100 text-gray-900 dark:bg-coolGray-600 dark:text-coolGray-50'
                                : 'text-gray-700 dark:text-coolGray-100'
                            }  flex items-center w-full px-4 py-2 text-sm leading-5 text-left`}
                          >
                            <PlusIcon />{' '}
                            <p className="ml-2">Add to Shopping Bag</p>
                          </a>
                        )}
                      </Menu.Item>
                    )}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default SlideMenu;
