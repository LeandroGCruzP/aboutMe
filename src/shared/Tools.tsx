import { Flex, Tooltip, TooltipProps } from '@chakra-ui/react'
import React from 'react'
import { Icons } from '~/assets'

interface CustomTooltipProps extends TooltipProps {
  children: React.ReactNode
}

const CustomTooltip = ({children, ...rest}: CustomTooltipProps) => {
  return (
    <Tooltip placement='top' color='#D7CCC8' bg='#1C1C1C' border='1px solid #D7CCC8' {...rest}>
      <Flex>
        {children}
      </Flex>
    </Tooltip>
  )
}

export function Tools() {
  return (
    <Flex flexDir='row' gap={2}>
      <CustomTooltip label='TypeScript'>
        <Icons.Typescript color='#2F74C0' size={25} />
      </CustomTooltip>

      <CustomTooltip label='JavaScript'>
        <Icons.JavaScript color='#EFD81D' size={25} />
      </CustomTooltip>

      <CustomTooltip label='ReactJS'>
        <Icons.React color='#61DAFB' size={25} />
      </CustomTooltip>

      <CustomTooltip label='NextJS'>
        <Icons.NextJS color='#D7CCC8' size={25} />
      </CustomTooltip>

      <CustomTooltip label='NodeJS'>
        <Icons.NodeJS color='#6EA560' size={25} />
      </CustomTooltip>

      <CustomTooltip label='Linux'>
        <Icons.Linux color='#D7CCC8' size={25} />
      </CustomTooltip>

      <CustomTooltip label='Git'>
        <Icons.Git color='#E84E31' size={25} />
      </CustomTooltip>

      <CustomTooltip label='Html5'>
        <Icons.Html5 color='#00A2D6' size={25} />
      </CustomTooltip>

      <CustomTooltip label='CSS3'>
        <Icons.Css3 color='#00A2D6' size={25} />
      </CustomTooltip>
    </Flex>
  )
}
