import { useRouter } from 'next/router';

const SignInErrorPage: React.FC = () => {
  const router = useRouter();

  const error = router.query;

  if (error) {
    console.error(
      `got an error: ${error}. Need to do something more with this.`
    );
  }

  return (
    <>
      <div className="max-w-screen-sm mx-auto">
        <p className="text-center text-coolGray-800 dark:text-white text-lg lg:text-xl xl:text-2xl">
          We encountered an error while trying to sign you in.
        </p>
      </div>
    </>
  );
};

export default SignInErrorPage;
