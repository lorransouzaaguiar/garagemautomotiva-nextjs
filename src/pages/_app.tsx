import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Layout from '~/app/components/Layout';
import StoreProvider from '../app/modules/shared/store/StoreProvider';
import { Theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
        <StoreProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StoreProvider>
    </ChakraProvider>
  );
}

export default MyApp;
