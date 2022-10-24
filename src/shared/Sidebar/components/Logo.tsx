import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { Icons } from '~/assets'

interface LogoProps {
  url: string
}

export function Logo({ url }: LogoProps) {
  return (
    <Flex justify='center' h='50px' align='center'>
      <Link href={url}>
        <Icons.Rocket size={30} cursor='pointer' color='#D7CCC8' />
      </Link>
    </Flex>
  )
}
