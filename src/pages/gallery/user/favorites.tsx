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

  if (!photos) return <p>Failed to fetch any photos. Maybe empty?</p>;

  return (
    <>
      <div>
        <h1>User Favorites Page</h1>
      </div>
      <Gallery photos={photos} />
    </>
  );
};

export default UserFavoritesPage;
