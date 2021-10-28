import "@fontsource/open-sans"
import "@fontsource/raleway"

import { ChakraProvider, ColorModeProvider, useColorMode } from '@chakra-ui/react'
import customTheme from '../styles/theme'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
