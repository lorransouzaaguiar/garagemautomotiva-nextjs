import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import StoreProvider from '~/app/components/StoreProvider';

import { Theme } from '~/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
    </ChakraProvider>
  );
}

export default MyApp;
