import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/client';
import Loader from '../../components/Loader';

const SignInPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [session, loading] = useSession();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  if (typeof window !== 'undefined' && session) {
    // * redirect to sign-success to complete sign in process
    router.push('/auth/signin-success');
  }

  if (loading) return <Loader />;

  return (
    <>
      <div className="container mx-auto my-14">
        <div className="flex flex-row w-full lg:w-3/4 xl:w-1/2 mx-auto justify-center items-center text-coolGray-700 dark:text-purple-700">
          <GPLogo />
          <h1 className="text-coolGray-700 dark:text-white text-5xl mx-8">
            Sign in.
          </h1>
        </div>
        <div className="flex flex-col w-96 mx-auto">
          <p className="my-4 dark:text-white">
            Please sign in to share photos or add them to your favorites or
            shopping bag.
          </p>
          <button
            className="w-80 mx-auto my-3 py-3 rounded border-2 border-indigo-700 dark:border-purple-600 text-coolGray-700 dark:text-white bg-coolGray-50 dark:bg-purple-700 dark:hover:bg-purple-500"
            onClick={() => signIn('google')}
          >
            <div className="flex flex-row items-center justify-center">
              <GoogleLogo />
              <p className="ml-2">Continue with Google</p>
            </div>
          </button>
          <button
            className="w-80 mx-auto my-3 py-3 rounded border-2 border-indigo-700 dark:border-purple-600 text-coolGray-700 dark:text-white bg-coolGray-50 dark:bg-purple-700 dark:hover:bg-purple-500"
            onClick={() => signIn('apple')}
          >
            <div className="flex flex-row items-center justify-center">
              <AppleLogo />
              <p className="ml-2">Continue with Apple</p>
            </div>
          </button>
          <form className="w-80 mx-auto py-2">
            <p className="text-sm mt-3 text-coolGray-700 dark:text-white">
              Email
            </p>
            <input
              className="w-full mb-3 py-2 px-3 bg-coolGray-100 dark:bg-coolGray-700 rounded border-2 border-coolGray-700 dark:border-purple-700 dark:text-white"
              name="email"
              type={email}
              value={email}
              placeholder="Enter your email address"
              onChange={onChange}
            />
            <button
              className="w-80 mx-auto my-3 py-3 rounded border-2 border-indigo-700 dark:border-purple-600 text-coolGray-700 dark:text-white bg-coolGray-50 dark:bg-purple-700 dark:hover:bg-purple-500"
              onClick={() => signIn('email', { email: email })}
            >
              <div className="flex flex-row items-center justify-center">
                <EmailIcon />
                <p className="ml-2">Continue with Email</p>
              </div>
            </button>
          </form>
          <p className="text-sm font-thin mt-20 text-coolGray-700 dark:text-white">
            By clicking "Continue with Google / Apple / email" above, you
            acknowledge that you have read and understood and agree to Gibbs
            Photography's Terms & Conditions and Privacy Policy.
          </p>
        </div>
      </div>
    </>
  );
};

const GPLogo = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-14 lg:h-16 xl:h-18 2xl:h-20 w-14 lg:w-16 xl:w-18 2xl:w-20"
      fill="currentColor"
      viewBox="0 0 512 512"
      stroke="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M486 256c0 127.025-102.975 230-230 230S26 383.025 26 256 128.975 26 256 26s230 102.975 230 230zm-10 0c0 121.503-98.497 220-220 220S36 377.503 36 256 134.497 36 256 36s220 98.497 220 220z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M512 256c0 141.385-114.615 256-256 256S0 397.385 0 256 114.615 0 256 0s256 114.615 256 256zm-15 0c0 133.101-107.899 241-241 241S15 389.101 15 256 122.899 15 256 15s241 107.899 241 241z"
      />
      <path d="M65.158 206.238c0 65.479 47.168 109.131 115.869 109.131 30.616 0 61.231-7.764 78.809-20.654v-59.033c0-13.037 3.076-16.553 18.75-18.604V209.9h-84.815v7.178c16.7 2.051 19.776 5.567 19.776 18.604v61.084c-5.713 4.98-16.699 8.642-29.883 8.642-39.697 0-60.937-47.021-60.937-101.22 0-58.301 22.998-97.12 62.841-97.12 31.348 0 52.002 25.782 59.766 60.791h6.885l-1.465-57.275c-11.865-7.91-35.596-13.477-67.383-13.477-65.332 0-118.213 37.647-118.213 109.131z" />
      <path d="M462.117 270.707c0-39.99-34.424-61.23-94.775-61.23h-92.578v7.177c16.552 3.076 19.775 6.592 19.775 19.776v157.617c0 13.183-3.223 16.699-19.775 19.775V421h93.164v-7.178c-18.164-2.636-21.387-7.47-21.387-21.972v-55.957h20.801c53.027 0 94.775-21.827 94.775-65.186zm-54.785 2.197c0 31.494-16.992 52.735-50.391 54.2l-10.4.439V217.826l10.4.44c34.717 1.464 50.391 23.584 50.391 54.638z" />
    </svg>
  );
};

const GoogleLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 512 512"
      stroke="currentColor"
    >
      <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
    </svg>
  );
};

const AppleLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="currentColor"
      viewBox="0 0 512 512"
      stroke="currentColor"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
};

const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 512 512"
      stroke="currentColor"
    >
      <path d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z" />
    </svg>
  );
};

export default SignInPage;
