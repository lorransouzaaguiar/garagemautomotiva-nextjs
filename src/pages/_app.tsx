import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import {Theme} from '~/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={Theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
