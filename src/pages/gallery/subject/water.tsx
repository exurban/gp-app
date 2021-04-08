import { GetStaticProps } from "next";
import { initializeApollo, addApolloState } from "../../../lib/apolloClient";
import { AllPhotosOfSubjectDocument, AllPhotosOfSubjectInput } from "../../../graphql-operations";

import SubjectGallery from "../../../components/SubjectGallery";

const input = { name: "water" } as AllPhotosOfSubjectInput;

const WaterGallery: React.FC = () => {
  return (
    <>
      <SubjectGallery input={input} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllPhotosOfSubjectDocument,
    variables: { input: input }
  });

  return addApolloState(apolloClient, {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  });
};

export default WaterGallery;
