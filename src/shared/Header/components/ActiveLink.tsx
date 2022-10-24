import { Link as ChakraLink, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps {
  url: string
  label: string
}

export function ActiveLink({ url, label }: ActiveLinkProps) {
  const { asPath } = useRouter()

  return (
    <Text cursor= 'pointer'>
      <Link href={url}>
        <ChakraLink
          borderBottom={asPath === url ? '3px solid #FF0000' : ''}
          transition= '0.2s filter'
          _hover= {{
            filter: 'brightness(1.2)'
          }}
        >
          {label}
        </ChakraLink>
      </Link>
    </Text>
  )
}
