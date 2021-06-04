import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/client';

const UserMenuItem = (): JSX.Element => {
  const router = useRouter();
  const [session, loading] = useSession();

  if (loading) return <div></div>;

  const signInOut = () => {
    if (session) {
      signOut();
      router.push(`/auth/signout`);
    } else {
      router.push(`/auth/signin`);
    }
  };

  const UserCircleIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 lg:h-7 xl:h-8 2xl:h-9 w-6 lg:w-7 xl:w-8 2xl:w-9"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  };
  return (
    <button
      className="mr-6 text-coolGray-800 hover:text-purple-600 dark:text-white dark:hover:text-purple-500 p-2"
      aria-label="user menu"
      onClick={() => signInOut()}
    >
      <UserCircleIcon />
    </button>
  );
};

export default UserMenuItem;
