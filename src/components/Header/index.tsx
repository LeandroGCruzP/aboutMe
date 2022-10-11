import { Flex, HStack, Link as ChakraLink, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Icons } from '../../assets/icons'
import { SelectLanguage } from '../SelectLanguage'

export function Header() {
  const { asPath } = useRouter()

  return (
    <Flex
      w="100%"
      h="60px"
      minH="60px"
      align="center"
      justify="flex-end"
      gap={5}
    >
      <Flex flex={1} justifyContent="space-between">
        <Flex cursor='pointer'>
          <Link href='/'>
            <Icons.Rocket size={30} />
          </Link>
        </Flex>

        <HStack spacing={8}>
          <Text fontWeight="medium" fontSize={20} cursor='pointer'>
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
          <Text fontWeight="medium" fontSize={20} cursor='pointer'>
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
          <Text fontWeight="medium" fontSize={20} cursor='pointer'>
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
      <SelectLanguage />
    </Flex>
  )
}
