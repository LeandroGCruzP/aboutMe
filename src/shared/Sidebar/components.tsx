import { Flex, Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Icons } from '~/assets'
import { styles } from './styles'

export const Components = { Logo, SocialMedia }

interface LogoProps {
  url: string
}

interface SocialMediaProps {
  label: string
  url: string
  children: React.ReactNode
}

function Logo({ url }: LogoProps) {
  return (
    <Flex {...styles.logo}>
      <Link href={url}>
        <Icons.Rocket size={30} cursor='pointer' color='#D7CCC8' />
      </Link>
    </Flex>
  )
}

function SocialMedia({ label, url, children }: SocialMediaProps) {
  return (
    <Tooltip label={label} {...styles.socialMedia}>
      <Flex>
        <Link href={url}>
          <a target='_blank'>
            {children}
          </a>
        </Link>
      </Flex>
    </Tooltip>
  )
}
