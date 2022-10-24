import { Flex, Tooltip, TooltipProps } from '@chakra-ui/react'
import React from 'react'

interface CustomTooltipProps extends TooltipProps {
  children: React.ReactNode
}

export function CustomTooltip ({ children, ...rest }: CustomTooltipProps) {
  return (
    <Tooltip placement='top' color='#D7CCC8' bg='#1C1C1C' border='1px solid #D7CCC8' {...rest}>
      <Flex>
        {children}
      </Flex>
    </Tooltip>
  )
}
