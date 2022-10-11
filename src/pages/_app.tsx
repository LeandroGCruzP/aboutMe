import { ChakraProvider, Flex } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { Shared } from '@/shared/index'
import { theme } from '@/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <ChakraProvider theme={theme}>
      <Flex
        h="100vh"
        w="100vw"
        bgImage={router.pathname === '/' ? 'url(/Background.svg)' : ''}
        bgPosition="center"
        bgRepeat="repeat"
        overflow="hidden"
      >
        <Flex w="95%" h="100%" marginX="auto" flexDir="column">
          {router.pathname === '/' && <Shared.Header />}
          {router.pathname === '/about' && <Shared.Header />}
          {router.pathname === '/projects' && <Shared.Header />}
          <Component {...pageProps} />
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
