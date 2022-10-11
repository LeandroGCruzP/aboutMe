import { ChakraProvider, Flex } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Header } from '../components/Header'

import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ChakraProvider theme={theme}>
      <Flex
        h="100vh"
        w="100vw"
        bg="#1C1C1C"
        bgImage={router.pathname === '/' ? 'url(/Background.svg)' : ''}
        bgPosition="center"
        bgRepeat="repeat"
      >
        <Flex w="95%" h="100%" marginX="auto" flexDir="column">
          {router.pathname === '/' && <Header />}
          {router.pathname === '/about' && <Header />}
          {router.pathname === '/projects' && <Header />}
          <Component {...pageProps} />
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
