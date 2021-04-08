import { useMemo, useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { useQuery, useMutation } from "@apollo/client";
import { addApolloState, initializeApollo } from "../../lib/apolloClient";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  PhotoInfoFragment,
  PhotoWithSkuDocument,
  FavoritesDocument,
  AddPhotoToFavoritesDocument,
  ShoppingBagItemsDocument
} from "../../graphql-operations";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import Link from "next/link";
import { photoSkus } from "../../../build-data";
import { BadgePrimary, BadgeSecondary } from "../../components/Badge";

import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";
import { NextSeo } from "next-seo";

const PhotoInfo: React.FC = () => {
  const router = useRouter();
  const [isSignedIn] = useState(false);
  const [addToFavorites] = useMutation(AddPhotoToFavoritesDocument);

  const { sku } = router.query;

  let skuInt = 0;
  if (sku && typeof sku === "string") {
    skuInt = parseInt(sku);
  }
  const { loading, error, data } = useQuery(PhotoWithSkuDocument, {
    variables: { sku: skuInt }
  });

  if (!data) {
    return null;
  }

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message="Error loading photo." />;

  const photo: PhotoInfoFragment = data.photoWithSku;
  const image = photo.images[0];
  const sharingImage = photo.sharingImage || image;

  const pgName = photo?.photographer?.name as string;
  const locationName = photo?.location?.name as string;
  const subjects = photo?.subjectsInPhoto?.map(x => x.subject);
  const tags = photo?.tagsForPhoto?.map(x => x.tag);
  const collections = photo?.collectionsForPhoto?.map(x => x.collection);

  //! route to Auth0 signin
  const signinFirst = () => {
    localStorage.setItem("redirectUrl", router.pathname);
    localStorage.setItem("favPhoto", photo.id);
    // router.push("/auth/signin");
  };

  const addPhotoToFavorites = () => {
    if (!isSignedIn) {
      signinFirst();
      return;
    }

    let success;
    let msg;

    addToFavorites({
      variables: { photoId: parseInt(photo.id) },
      optimisticResponse: {
        __typename: "Mutation",
        addPhotoToFavorites: {
          success: true,
          message: `Added ${photo.title} to your favorites.`,
          addedPhotoWithId: photo.id,
          __typename: "AddPhotoToFavoritesResponse"
        }
      },
      update: (cache, { data: { ...newPhotoResponse } }) => {
        const { ...existing } = cache.readQuery({
          query: FavoritesDocument
        });

        const response = newPhotoResponse.addPhotoToFavorites;
        success = response.success;
        msg = response.message;

        const existingPhotos = existing.favorites?.photoList || [];

        cache.writeQuery({
          query: FavoritesDocument,
          data: {
            favorites: {
              __typename: "FavoritesResponse",
              photoList: photo ? [photo, ...existingPhotos] : [...existingPhotos]
            }
          }
        });
      }
    });
    {
      success ? console.log(`success: ${msg}`) : console.log(`failure: ${msg}`);
    }
  };

  const { data: favs } = useQuery(FavoritesDocument);
  const inFavorites = useMemo(() => {
    const favIds = favs?.favorites?.photoList?.map(f => f.id);
    return favIds ? favIds.includes(photo.id) : false;
  }, [favs]);

  const { data: bagItems } = useQuery(ShoppingBagItemsDocument);
  const inShoppingBag = useMemo(() => {
    const bagItemIds = bagItems?.shoppingBagItems?.dataList?.map(b => b.photo.id);
    return bagItemIds ? bagItemIds.includes(photo.id) : false;
  }, [bagItems]);

  const onFavoritesClick = () => {
    inFavorites ? router.push(`/favorites`) : addPhotoToFavorites();
  };

  const onShoppingBagClick = () => {
    inShoppingBag ? router.push("/shop/review-order") : router.push(`/shop/options/${photo.sku}`);
  };

  const pageTitle =
    photo.title && photo.title != "Untitled"
      ? `Gibbs Photography | ${photo.title}`
      : `Gibbs Photography`;

  const description =
    photo.description && photo.description != "No description provided."
      ? `${photo.description}`
      : `Wildlife & Landscape Photography`;

  const twitterHandle = `@gibbs_photog`;
  const siteName = `Gibbs Photography`;
  const siteUrl = `https://gibbs-photography.com`;
  const pageUrl = `https://gibbs-photography.com/image/${photo.sku}`;

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={description}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: siteUrl,
          site_name: siteName,
          title: pageTitle,
          description: description,
          images: [
            {
              url: sharingImage.imageUrl,
              width: sharingImage.width,
              height: sharingImage.height
            }
          ]
        }}
        twitter={{
          handle: twitterHandle,
          site: siteUrl,
          cardType: "summary_large_image"
        }}
      />
      <div className="container py-4 mx-auto text-coolGray-800 dark:text-white">
        <div className="flex flex-col w-5/6 w-max-w-3xl mx-auto">
          <Image
            className="w-full relative overflow-hidden rounded-md shadow-lg"
            src={image.imageUrl}
            alt={image.altText}
            layout="responsive"
            width={image.width}
            height={image.height}
            sizes="(max-width: 400px) 100vw, 720px"
          />
          <h2 className="subpixel-antialiased xl:text-3xl xl:font-semibold text-center mt-4 text-coolGray-800 dark:text-white">
            {photo.title}
          </h2>
          <div className="flex flex-row items-baseline leading-8">
            <p className="text-xs lg:text-sm uppercase mr-2 text-coolGray-400">Photographer:</p>
            <Link href={`/gallery/photographer/${encodeURIComponent(pgName.toLowerCase())}`}>
              <a>
                <h3>{pgName}</h3>
              </a>
            </Link>
          </div>
          <div className="flex flex-row items-baseline leading-8">
            <p className="text-xs lg:text-sm uppercase mr-2 text-coolGray-400">Location:</p>
            <Link href={`/gallery/location/${encodeURIComponent(locationName.toLowerCase())}`}>
              <a>
                <h3>{locationName}</h3>
              </a>
            </Link>
          </div>
          <div className="flex flex-row items-baseline leading-8">
            <p className="text-xs lg:text-sm uppercase mr-2 text-coolGray-400">Description:</p>
            <p>{photo.description}</p>
          </div>
          <div className="flex flex-row items-baseline leading-8 mt-2">
            <p className="text-xs lg:text-sm uppercase mr-2 text-coolGray-400">Related:</p>
            {subjects?.map(sub => (
              <BadgePrimary text={sub.name} />
            ))}
            {tags?.map(tag => (
              <BadgeSecondary text={tag.name} />
            ))}
          </div>
          <div className="bg-coolGray-100 rounded-md my-4 mx-auto w-1/2">
            <div className="flex flex-row justify-evenly my-6 lg:my-10">
              <button
                className="flex flex-col items-center mx-2 px-4 py-3 max-w-md border border-transparent text-base font-medium rounded-md text-purple-50 bg-indigo-600 shadow-lg hover:bg-purple-600 hover:text-white sm:px-8"
                onClick={() => onFavoritesClick()}
              >
                {inFavorites ? `View in Favorites` : `Add to Favorites`}
              </button>
              <button
                className="flex flex-col items-center mx-2 px-4 py-3 max-w-md border border-transparent text-base font-medium rounded-md text-purple-50 bg-indigo-600 shadow-lg hover:bg-purple-600 hover:text-white sm:px-8"
                onClick={() => onShoppingBagClick()}
              >
                {inShoppingBag ? `View in Shopping Bag` : `Add to Shopping Bag`}
              </button>
            </div>
          </div>
          {collections && collections.length > 0 ? (
            <>
              <p>Collections</p>
              {collections?.map(collection => (
                <Link
                  key={collection.id}
                  href={`/gallery/collection/${encodeURIComponent(collection.name.toLowerCase())}`}
                >
                  <a>{collection.name}</a>
                </Link>
              ))}
            </>
          ) : null}
          <div className="flex flex-row items-center leading-8">
            <p className="text-xs lg:text-sm uppercase mr-2 text-coolGray-400">Share:</p>

            <TwitterShareButton
              className="mx-2"
              url={pageUrl}
              title={pageTitle}
              hashtags={["nature", "photography"]}
            >
              <TwitterIcon className="rounded-full" size={36} />
            </TwitterShareButton>
            <FacebookShareButton
              className="mx-2"
              url={pageUrl}
              title={pageTitle}
              hashtag={"photography"}
            >
              <FacebookIcon className="rounded-full" size={36} />
            </FacebookShareButton>
            <LinkedinShareButton
              className="mx-2"
              url={pageUrl}
              title={pageTitle}
              summary={description}
              source={siteUrl}
            >
              <LinkedinIcon className="rounded-full" size={36} />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = photoSkus.map(sku => ({ params: { sku: sku } }));
  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params.sku !== "string") {
    return;
  }
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: PhotoWithSkuDocument,
    variables: { sku: parseInt(params.sku) }
  });

  return addApolloState(apolloClient, {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  });
};

export default PhotoInfo;