import { ChakraProvider } from '@chakra-ui/react'
import { NextComponentType, NextPageContext } from 'next'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { Shared } from '~/shared'
import { theme } from '~/styles/theme'

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: NextComponentType<NextPageContext, any, any>
  }
}

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <ChakraProvider theme={theme}>
      <Shared.CommandBar>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </Shared.CommandBar>
    </ChakraProvider>
  )
}

export default appWithTranslation(MyApp)
