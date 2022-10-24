import { Flex, Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface SocialMediaProps {
  label: string
  url: string
  children: React.ReactNode
}

export function SocialMedia({ label, url, children }: SocialMediaProps) {
  return (
    <Tooltip
      label={label}
      placement='right'
      color='#D7CCC8'
      bg='#1C1C1C'
      border= '1px solid #D7CCC8'
    >
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
