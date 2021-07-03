import { extendTheme, ChakraTheme } from '@chakra-ui/react'

const customTheme: Partial<ChakraTheme> = {
    config: {
        initialColorMode: 'dark',
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
}

export const Theme = extendTheme(customTheme)
