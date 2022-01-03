import { extendTheme, ChakraTheme } from '@chakra-ui/react';

const customTheme: Partial<ChakraTheme> = {
  config: {
    initialColorMode: 'dark',
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  colors: {
    primary: '#3C3F41',
    secondary: '#7D858A'
  },
  components: {
    Button: {
      baseStyle: {
        color: 'white',
        
      },
      sizes: {
        md: {
          minW:"80px",
          minH:'33px',
          fontSize: '0.875em'
        }
      },
      variants: {
        solid: {
          bg: '#333FFF',
          _hover: {
            backgroundColor: 'secondary'
          }
        }
      }
    }
  }
};

export const Theme = extendTheme(customTheme);
