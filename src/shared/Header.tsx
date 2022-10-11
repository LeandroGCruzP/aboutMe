import { Button, Flex, HStack, Link as ChakraLink, Menu, MenuButton, Text, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Flag from 'react-flagkit'

import { Icons } from '../assets'

export function Header() {
  const { asPath } = useRouter()
  const isPhoneVersion = useBreakpointValue({ base: true, md: false })

  return (
    <Flex
      w="100%"
      h="60px"
      minH="60px"
      align="center"
      justify="flex-end"
      gap={[0, 0, 2, 4, 6 ]}
    >
      <Flex flex={1} justifyContent="space-between">
        <Flex cursor='pointer'>
          <Link href='/'>
            <Icons.Rocket size={30} />
          </Link>
        </Flex>

        <HStack spacing={[4, 4, 4, 6, 8 ]}>
          <Text fontWeight="medium" fontSize={['md', 'lg', 'lg', 'lg', '2xl']} cursor='pointer'>
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
          <Text fontWeight="medium" fontSize={['md', 'lg', 'lg', 'lg', '2xl']} cursor='pointer'>
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
          <Text fontWeight="medium" fontSize={['md', 'lg', 'lg', 'lg', '2xl']} cursor='pointer'>
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
      </Flex>

      <Menu matchWidth autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            variant="filled"
            rightIcon={!isPhoneVersion && <Icons.ChevronDown />}
            zIndex="1"
          >
            <Flag country="US" />
          </MenuButton>
        </>
      )}
    </Menu>
    </Flex>
  )
}
