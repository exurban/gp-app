import { useMemo } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useQuery, useMutation } from '@apollo/client';
import { addApolloState, initializeApollo } from '../../lib/apolloClient';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import Image from 'next/image';
import {
  PhotoInfoFragment,
  PhotoWithSkuDocument,
  FavoritesDocument,
  AddPhotoToFavoritesDocument,
  ShoppingBagItemsDocument,
} from '../../graphql-operations';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { photoSkus } from '../../../build-data';
import { TagLinkPrimary, TagLinkSecondary } from '../../components/TagLink';

import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';
import { toast } from 'react-toastify';

const PhotoInfo: React.FC = () => {
  const router = useRouter();
  const [session] = useSession();
  const [addToFavorites] = useMutation(AddPhotoToFavoritesDocument);

  const mdScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const lgScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  const { sku } = router.query;

  let skuInt = 0;
  if (sku && typeof sku === 'string') {
    skuInt = parseInt(sku);
  }
  const { loading, error, data } = useQuery(PhotoWithSkuDocument, {
    variables: { sku: skuInt },
  });

  if (!data || !data.photoWithSku) {
    return null;
  }

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message="Error loading photo." />;

  const photo: PhotoInfoFragment = data.photoWithSku;

  if (!photo.photoImage) {
    console.error(`ERROR: Got photo without an image!`);
    return null;
  }
  const image = photo.photoImage;
  // const sharingImage = photo.sharingImage || image;

  const pgName = photo.photographer?.name as string;
  const locationName = photo.location?.name as string;
  const subjects = photo.subjectsInPhoto?.map((x) => x.subject);
  const tags = photo.tagsForPhoto?.map((x) => x.tag);
  const collections = photo.collectionsForPhoto?.map((x) => x.collection);

  const toastSuccess = (msg: string) => {
    toast.success(msg);
  };

  const toastFail = (msg: string) => {
    toast.warning(msg);
  };

  const signinFirst = () => {
    localStorage.setItem('redirectUrl', router.asPath);
    localStorage.setItem('favPhoto', photo.id);
    router.push('/auth/signin');
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

  const onFavoritesClick = () => {
    inFavorites
      ? router.push(`/gallery/user/favorites`)
      : addPhotoToFavorites();
  };

  const onShoppingBagClick = () => {
    inShoppingBag
      ? router.push('/shop/review-order')
      : router.push(`/shop/options/${photo.sku}`);
  };

  const shareIconSize = () => {
    let size = 36;
    if (mdScreen) {
      size = 42;
    } else if (lgScreen) {
      size = 48;
    }
    return size;
  };

  const pageTitle =
    photo.title && photo.title != 'Untitled'
      ? `Gibbs Photography | ${photo.title}`
      : `Gibbs Photography`;

  const description =
    photo.description && photo.description != 'No description provided.'
      ? `${photo.description}`
      : `Wildlife & Landscape Photography`;

  const siteUrl = `https://gibbs-photography.com`;
  const pageUrl = `https://gibbs-photography.com/image/${photo.sku}`;

  return (
    <>
      <Head>
        <meta property="og:url" content={siteUrl} key="ogurl" />
        <link rel="canonical" href={pageUrl} key="canonical" />
        <meta
          property="og:image"
          content={photo.shareImage?.imageUrl}
          key="ogimage"
        />
        <meta
          property="og:image:width"
          content={photo.shareImage?.width.toString()}
          key="ogimagewidth"
        />
        <meta
          property="og:image:height"
          content={photo.shareImage?.height.toString()}
          key="ogimageheight"
        />
        <meta
          name="twitter:image"
          content={photo.shareImage?.imageUrl}
          key="twitterimage"
        />
      </Head>
      <div className="container py-4 mx-auto text-coolGray-800 dark:text-white">
        <div className="flex flex-col w-5/6 w-max-w-3xl mx-auto">
          <Image
            className="w-full relative overflow-hidden rounded-md shadow-lg"
            src={image.webpUrl}
            alt={image.altText}
            layout="responsive"
            width={image.width}
            height={image.height}
            sizes="(max-width: 400px) 100vw, 720px"
          />
          <h2 className="subpixel-antialiased text-2xl md:3xl xl:text-4xl md: font-medium xl:font-semibold text-center mt-4 text-coolGray-800 dark:text-white">
            {photo.title}
          </h2>
          <div className="flex flex-row items-baseline leading-8">
            <p className="text-xs md:text-sm lg:text-base xl:text-lg uppercase mr-2 text-coolGray-400">
              Photographer:
            </p>
            {pgName && (
              <Link
                href={`/gallery/photographer/${encodeURIComponent(
                  pgName.toLowerCase()
                )}`}
              >
                <a>
                  <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl mt-3 lg:mt-4 xl:mt-5 hover:text-indigo-700">
                    {pgName}
                  </h3>
                </a>
              </Link>
            )}
          </div>
          <div className="flex flex-row items-baseline leading-8">
            <p className="text-xs md:text-sm lg:text-base xl:text-lg uppercase mr-2 text-coolGray-400">
              Location:
            </p>
            {locationName && (
              <Link
                href={`/gallery/location/${encodeURIComponent(
                  locationName.toLowerCase()
                )}`}
              >
                <a>
                  <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 lg:mt-3 xl:mt-4 hover:text-purple-600">
                    {locationName}
                  </h3>
                </a>
              </Link>
            )}
          </div>
          <div className="flex flex-row items-baseline leading-8">
            <p className="text-xs md:text-sm lg:text-base xl:text-lg uppercase mr-2 text-coolGray-400">
              Description:
            </p>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 lg:mt-3 xl:mt-4">
              {photo.description}
            </p>
          </div>

          <div className="bg-coolGray-100 dark:bg-coolGray-700 rounded-md my-8 mx-auto">
            <div className="flex flex-col md:flex-row content-evenly p-8">
              <button
                className="flex flex-col items-center px-4 py-3 md:mt-0 border border-transparent text-base font-medium rounded-md text-purple-50 bg-indigo-600 shadow-lg hover:bg-purple-600 hover:text-white sm:px-8"
                onClick={() => onFavoritesClick()}
              >
                {inFavorites ? `View in Favorites` : `Add to Favorites`}
              </button>
              <button
                className="flex flex-col items-center px-4 py-3 mt-5 md:mt-0 md:ml-5 border border-transparent text-base font-medium rounded-md text-purple-50 bg-indigo-600 shadow-lg hover:bg-purple-600 hover:text-white sm:px-8"
                onClick={() => onShoppingBagClick()}
              >
                {inShoppingBag ? `View in Shopping Bag` : `Add to Shopping Bag`}
              </button>
            </div>
          </div>
          {collections && collections.length > 0 ? (
            <>
              <p>Collections</p>
              {collections?.map((collection) => (
                <Link
                  key={collection.id}
                  href={`/gallery/collection/${encodeURIComponent(
                    collection.name.toLowerCase()
                  )}`}
                >
                  <a>{collection.name}</a>
                </Link>
              ))}
            </>
          ) : null}
          <div className="flex flex-col lg:flex-row justify-start mt-6">
            <div className="flex flex-row items-center leading-8 flex-auto">
              <p className="text-xs md:text-sm lg:text-base xl:text-lg uppercase mr-2 text-coolGray-400 ">
                Related:
              </p>
              {subjects?.map((sub) => (
                <TagLinkPrimary
                  key={sub.name}
                  text={sub.name}
                  url={`/gallery/subject/${encodeURIComponent(
                    sub.name.toLowerCase()
                  )}`}
                />
              ))}
              {tags?.map((tag) => (
                <TagLinkSecondary
                  key={tag.name}
                  text={tag.name}
                  url={`/gallery/tag/${encodeURIComponent(
                    tag.name.toLowerCase()
                  )}`}
                />
              ))}
            </div>
            <div className="flex flex-row items-center leading-8 mt-6 lg:mt-0 flex-auto">
              <p className="text-xs md:text-sm lg:text-base xl:text-lg uppercase mr-2 text-coolGray-400">
                Share:
              </p>

              <TwitterShareButton
                className="mx-2 md:mx-3 lg:mx-4"
                url={pageUrl}
                title={pageTitle}
                hashtags={['nature', 'photography']}
              >
                <TwitterIcon className="rounded-full" size={shareIconSize()} />
              </TwitterShareButton>
              <FacebookShareButton
                className="mx-2 md:mx-3 lg:mx-4"
                url={pageUrl}
                title={pageTitle}
                hashtag={'photography'}
              >
                <FacebookIcon className="rounded-full" size={shareIconSize()} />
              </FacebookShareButton>
              <LinkedinShareButton
                className="mx-2 md:mx-3 lg:mx-4"
                url={pageUrl}
                title={pageTitle}
                summary={description}
                source={siteUrl}
              >
                <LinkedinIcon className="rounded-full" size={shareIconSize()} />
              </LinkedinShareButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = photoSkus.map((sku) => ({ params: { sku: sku } }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params.sku !== 'string') {
    return;
  }
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PhotoWithSkuDocument,
    variables: { sku: parseInt(params.sku) },
  });

  return addApolloState(apolloClient, {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  });
};

export default PhotoInfo;
