import { Shared } from '@/shared/index'
import { Flex } from '@chakra-ui/react'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Flex
      w='100vw'
      h='100vh'
      pl={['5px', '5px', '20px']}
      bgImage={'url(/Background.svg)'}
      bgPosition='center'
      bgRepeat='repeat'
      overflow='hidden'
    >
      <Shared.Sidebar />

      <Flex flex='1' flexDir='column'>
        <Shared.Header />

        <Flex
          as='main'
          flex='1'
          overflowY='auto'
          css={{
            '::-webkit-scrollbar': {
              width: 12
            },
            '::-webkit-scrollbar-track': {
              background: '#222222',
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5
            },
            '::-webkit-scrollbar-thumb': {
              backgroundColor: '#131313',
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5
            }
          }}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}
