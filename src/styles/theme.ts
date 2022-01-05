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
    c11: '#131313',
    c7: '#676767',
    c3: '#BFBFBF',
    w: '#FFFFFF',
    p12: '#514EE5',
    comp1: '#CB524A',
    comp2: '#D2AE68'
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
