import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
// import { useQuery, useMutation } from '@apollo/client';
// import {
//   FavoritesDocument,
//   ShoppingBagItemsDocument,
//   AddPhotoToFavoritesDocument,
//   AddProductToShoppingBagDocument,
// } from '../../graphql-operations';
import Loader from '../../components/Loader';

const SignInSuccessPage: React.FC = () => {
  const router = useRouter();
  const [session, loading] = useSession();

  if (loading) return <Loader />;

  if (session && router) {
    console.log(`session & router`);
  }
  return <></>;
};

export default SignInSuccessPage;
