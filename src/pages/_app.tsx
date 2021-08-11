import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider as AuthProvider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout';
import CarouselLayout from '../components/CarouselLayout';
import { useRouter } from 'next/router';
import * as gtag from '../utils/gtag';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const apolloClient = useApollo(pageProps);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <AuthProvider session={pageProps.session}>
          <ThemeProvider attribute="class">
            {router.pathname.startsWith(`/carousel/`) ? (
              <CarouselLayout>
                <Component {...pageProps} />
              </CarouselLayout>
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </ThemeProvider>
        </AuthProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
