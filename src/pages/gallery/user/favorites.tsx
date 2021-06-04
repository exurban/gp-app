import { useRouter } from 'next/router';
import { FavoritesDocument } from '../../../graphql-operations';
import { useSession } from 'next-auth/client';
import { useQuery } from '@apollo/client';
import ErrorMessage from '../../../components/ErrorMessage';
import Loader from '../../../components/Loader';
import Gallery from '../../../components/Gallery';

const UserFavoritesPage: React.FC = () => {
  const router = useRouter();
  const [session] = useSession();

  if (typeof window !== 'undefined' && !session) {
    router.push(`/auth/signin`);
  }

  const { loading, error, data } = useQuery(FavoritesDocument);

  if (error) return <ErrorMessage message="Error loading photos." />;

  if (loading) return <Loader />;

  if (!data) return <p>Failed to fetch data.</p>;

  const photos = data.favorites?.photoList;

  if (!photos || photos.length < 1)
    return (
      <div>
        <h5 className="text-blueGray-800 dark:text-white w-5/6 mx-auto text-center text-xl lg:text-2xl xl:text-4xl my-12">
          There are no photos saved to your favorites.
        </h5>
        <h5 className="text-blueGray-800 dark:text-white w-5/6 mx-auto text-center text-xl lg:text-2xl xl:text-4xl my-12">
          Please favorite a photo or two and come back.
        </h5>
      </div>
    );

  return (
    <>
      <Gallery photos={photos} />
    </>
  );
};

export default UserFavoritesPage;
