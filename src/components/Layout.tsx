import Head from "next/head";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";
import NavMenuItem from "./NavMenuItem";
import ThemeMenuItem from "./ThemeMenuItem";
import UserMenuItem from "./UserMenuItem";
import FavoritesMenuItem from "./FavoritesMenuItem";
import ShoppingBagMenuItem from "./ShoppingBagMenuItem";
import SideNavMenu from "./SideNavMenu";
import Footer from "./Footer";
import { useMediaQuery } from "react-responsive";

const GPLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 lg:h-10 xl:h-12 2xl:h-14 w-8 lg:w-10 xl:w-12 2xl:w-14"
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

const Layout: React.FC = props => {
  const router = useRouter();
  const largeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  const { children, ...customMeta } = props;
  const meta = {
    title: "Gibbs Photography",
    description: `Landscape & Wildlife Photography`,
    type: `website`,
    image: `https://configcdkstack-gpbucketc7c11d3d-qtgzc43jqi2c.s3.us-east-2.amazonaws.com/1180_share-image-1617560952028.jpeg`,
    ...customMeta
  };

  return (
    <div className="min-h-screen bg-white dark:bg-coolGray-800">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://gibbs-photography.com${router.asPath}`}
          key="ogurl"
        />
        <link
          rel="canonical"
          href={`https://gibbs-photography.com${router.asPath}`}
          key="canonical"
        />
        <meta property="og:type" content={meta.type} key="ogtype" />
        <meta property="og:site_name" content="Gibbs Photography" key="ogsitename" />
        <meta property="og:description" content={meta.description} key="ogdescription" />
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta property="og:image:secure_url" content={meta.image} key="ogimagesecureurl" />
        <meta name="twitter:card" content="summary_large_image" key="twittercard" />
        <meta name="twitter:site" content="@gibbs_photog" key="twittersite" />
        <meta name="twitter:title" content={meta.title} key="twittertitle" />
        <meta name="twitter:description" content={meta.description} key="twitterdescription" />
        <meta name="twitter:image" content={meta.image} key="twitterimage" />
      </Head>
      <div className="sticky top-0 z-10 bg-white dark:bg-coolGray-800">
        <div className="mx-4 lg:mx-10 xl:mx-20">
          <div className="flex justify-between items-center py-2  md:space-x-8">
            <nav>
              <ul className="flex">
                {!largeScreen && <SideNavMenu />}
                <li className="my-auto p-2 text-coolGray-800 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-500">
                  <ActiveLink
                    activeClassName="text-indigo-600 dark:text-indigo-500"
                    href="/"
                    aria-label="home"
                  >
                    <a>
                      <GPLogo />
                    </a>
                  </ActiveLink>
                </li>
                {largeScreen && (
                  <>
                    <NavMenuItem name="Featured" link="/gallery/featured" />
                    <NavMenuItem name="Land" link="/gallery/subject/land" />
                    <NavMenuItem name="Water" link="/gallery/subject/water" />
                    <NavMenuItem name="Sky" link="/gallery/subject/sky" />
                    <NavMenuItem name="Bloom" link="/gallery/subject/bloom" />
                    <NavMenuItem name="Bird" link="/gallery/subject/bird" />
                    <NavMenuItem name="Beast" link="/gallery/subject/beast" />
                  </>
                )}
              </ul>
            </nav>

            <div className="flex">
              <UserMenuItem />
              <FavoritesMenuItem />
              <ShoppingBagMenuItem />
              <ThemeMenuItem />
            </div>
          </div>
        </div>
      </div>

      <main className="min-h-screen bg-white dark:bg-coolGray-800 pb-16 xl:pb-20">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
