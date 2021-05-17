import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { initializeApollo, addApolloState } from '../../../lib/apolloClient';
import {
  AllPhotosAtLocationDocument,
  AllPhotosAtLocationInput,
} from '../../../graphql-operations';
import Loader from '../../../components/Loader';
import ErrorMessage from '../../../components/ErrorMessage';
import Gallery from '../../../components/Gallery';

const TagGallery: React.FC = () => {
  const router = useRouter();

  // * get tag from router
  const { name } = router.query;
  let searchString;
  if (name) {
    searchString = decodeURIComponent(name as string);
  }

  const input = { name: searchString } as AllPhotosAtLocationInput;

  const { loading, error, data } = useQuery(AllPhotosAtLocationDocument, {
    variables: { input: input },
  });

  if (error)
    return (
      <ErrorMessage message={`Error loading photos at location: ${name}.`} />
    );

  if (loading) return <Loader />;

  if (!data) return null;

  const { photos } = data.allPhotosAtLocation;

  return (
    <>
      <Gallery photos={photos} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const locations = [
    'Eastern U.S.',
    'Great Lakes',
    'Western U.S.',
    'Southwestern U.S.',
    'Southern U.S.',
    'Unknown',
  ];
  const paths = locations.map((l) => ({ params: { name: l.toLowerCase() } }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || typeof params.name !== 'string') {
    return;
  }
  const input = { name: params.name } as AllPhotosAtLocationInput;
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllPhotosAtLocationDocument,
    variables: { input: input },
  });

  return addApolloState(apolloClient, {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  });
};

export default TagGallery;
