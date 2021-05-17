import Head from 'next/head';
import { useRouter } from 'next/router';
import ActiveLink from './ActiveLink';
import NavMenuItem from './NavMenuItem';
import ThemeMenuItem from './ThemeMenuItem';
import UserMenuItem from './UserMenuItem';
import FavoritesMenuItem from './FavoritesMenuItem';
import ShoppingBagMenuItem from './ShoppingBagMenuItem';
import SideNavMenu from './SideNavMenu';
import Footer from './Footer';
import { useMediaQuery } from 'react-responsive';
import { GPLogo } from './Svg';

const Layout: React.FC = (props) => {
  const router = useRouter();
  const largeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  const { children, ...customMeta } = props;
  const meta = {
    title: 'Gibbs Photography',
    description: `Landscape & Wildlife Photography`,
    type: `website`,
    image: `https://configcdkstack-gpbucketc7c11d3d-qtgzc43jqi2c.s3.us-east-2.amazonaws.com/1180_share-image-1617560952028.jpeg`,
    ...customMeta,
  };

  return (
    <>
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
        <meta
          property="og:site_name"
          content="Gibbs Photography"
          key="ogsitename"
        />
        <meta
          property="og:description"
          content={meta.description}
          key="ogdescription"
        />
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta property="og:image" content={meta.image} key="ogimage" />
        <meta
          property="og:image:secure_url"
          content={meta.image}
          key="ogimagesecureurl"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twittercard"
        />
        <meta name="twitter:site" content="@gibbs_photog" key="twittersite" />
        <meta name="twitter:title" content={meta.title} key="twittertitle" />
        <meta
          name="twitter:description"
          content={meta.description}
          key="twitterdescription"
        />
        <meta name="twitter:image" content={meta.image} key="twitterimage" />
      </Head>
      <div>
        <header className="sticky top-0 z-10 h-24 bg-white dark:bg-coolGray-800">
          <nav className="mx-4 lg:mx-10 xl:mx-20" aria-label="Top">
            <div>
              <div className="flex justify-between items-center py-2  md:space-x-8">
                <ul className="flex">
                  {!largeScreen && <SideNavMenu />}
                  <li className="my-auto p-2 text-coolGray-800 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-500">
                    <ActiveLink
                      activeClassName="text-indigo-600 dark:text-indigo-500"
                      href="/"
                      aria-label="home"
                    >
                      <a aria-label="home">
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

                <div className="flex">
                  <UserMenuItem />
                  <FavoritesMenuItem />
                  <ShoppingBagMenuItem />
                  <ThemeMenuItem />
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>

      <main className="h-screen bg-white dark:bg-coolGray-800 pb-16 xl:pb-20">
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
