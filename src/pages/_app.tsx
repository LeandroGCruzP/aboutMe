import { ChakraProvider } from '@chakra-ui/react'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

import { Layout } from '@/layout/index'
import { CommandBar } from '@/shared/CommandBar'
import { theme } from '@/styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CommandBar>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CommandBar>
    </ChakraProvider>
  )
}

export default appWithTranslation(MyApp)
