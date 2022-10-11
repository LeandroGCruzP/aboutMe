import { Flex } from '@chakra-ui/react'
import { Shared } from '../shared'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <Flex
      w='100vw'
      h='100vh'
      bgImage={'url(/Background.svg)'}
      bgPosition='center'
      bgRepeat='repeat'
      overflow='hidden'
    >
      <Flex w='95%' h='100%' marginX='auto' flexDir='column'>
        <Shared.Header />

        {children}
      </Flex>
    </Flex>
  )
}
