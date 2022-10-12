import { Flex } from '@chakra-ui/react'

import { Shared } from '@/shared/index'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  const { children } = props

  return (
    <Flex
      w='100vw'
      h='100vh'
      px={['5px', '5px', '20px']}
      bgImage={'url(/Background.svg)'}
      bgPosition='center'
      bgRepeat='repeat'
      overflow='hidden'
    >
      <Shared.Sidebar />

      <Flex flex='1' flexDir='column'>
        <Shared.Header />

        <Flex flex='1'>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}
