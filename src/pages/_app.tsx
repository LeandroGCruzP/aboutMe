import { CommandBar } from '@/shared/CommandBar'
import { theme } from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { NextComponentType, NextPageContext } from 'next'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: NextComponentType<NextPageContext, any, any>
  }
}

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <ChakraProvider theme={theme}>
      <CommandBar>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </CommandBar>
    </ChakraProvider>
  )
}

export default appWithTranslation(MyApp)
