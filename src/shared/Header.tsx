import { Button, Flex, HStack, Link as ChakraLink, Menu, MenuButton, Text, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Flag from 'react-flagkit'

import { Icons } from '@/assets/index'
import { useKBar } from 'kbar'

export function Header() {
  const { asPath } = useRouter()
  const { query } = useKBar()
  const isPhoneVersion = useBreakpointValue({ base: true, md: false })

  return (
    <Flex
      w="100%"
      align="center"
      justify="flex-end"
      gap={[0, 0, 2, 4, 6 ]}
      pt={['5px', '5px', '15px']}
    >
      <HStack
        spacing={[4, 4, 4, 6, 8 ]}
        fontSize={['sm', 'md', 'md', 'md', 'lg']}
        fontWeight="medium"
        color='#D7CCC8'
      >
        <Text cursor='pointer'>
          <Link href='/'>
            <ChakraLink
              borderBottom={asPath === '/' ? '3px solid #FF0000' : ''}
              transition='0.2s filter'
              _hover={{ filter: 'brightness(1.2)' }}
            >
              Home
            </ChakraLink>
          </Link>
        </Text>

        <Text cursor='pointer'>
          <Link href='/about'>
            <ChakraLink
              borderBottom={asPath === '/about' ? '3px solid #FF0000' : ''}
              transition='0.2s filter'
              _hover={{ filter: 'brightness(1.2)' }}
            >
              About
            </ChakraLink>
          </Link>
        </Text>

        <Text cursor='pointer'>
          <Link href='/projects'>
            <ChakraLink
              borderBottom={asPath === '/projects' ? '3px solid #FF0000' : ''}
              transition='0.2s filter'
              _hover={{ filter: 'brightness(1.2)' }}
            >
              Projects
            </ChakraLink>
          </Link>
        </Text>
      </HStack>

      <Menu matchWidth autoSelect={false}>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              variant="filled"
              rightIcon={!isPhoneVersion && <Icons.ChevronDown color='#D7CCC8' />}
              zIndex="1"
            >
              <Flag country="US" size={23} />
            </MenuButton>
          </>
        )}
      </Menu>

      <Icons.Command fontSize={20} onClick={query?.toggle} cursor='pointer' />
    </Flex>
  )
}
