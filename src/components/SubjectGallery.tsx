// import { useRouter } from "next/router";
import { useQuery } from '@apollo/client';
import {
  AllPhotosOfSubjectDocument,
  AllPhotosOfSubjectInput,
} from '../graphql-operations';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import Gallery from './Gallery';

type Props = {
  input: AllPhotosOfSubjectInput;
};

const SubjectGallery: React.FC<Props> = ({ input }) => {
  // const router = useRouter();

  const { loading, error, data } = useQuery(AllPhotosOfSubjectDocument, {
    variables: {
      input: input,
    },
  });

  if (error) return <ErrorMessage message="Error loading photos." />;

  if (loading) return <Loader />;

  if (!data) return null;

  const { photos } = data.allPhotosOfSubject;

  return <Gallery photos={photos} />;
};

export default SubjectGallery;
