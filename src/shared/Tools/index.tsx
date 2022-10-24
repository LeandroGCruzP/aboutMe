import { Flex } from '@chakra-ui/react'
import { Icons } from '~/assets'
import { Components } from './components'

export function Tools() {
  return (
    <Flex flexDir='row' gap={2}>
      <Components.CustomTooltip label='TypeScript'>
        <Icons.Typescript color='#2F74C0' size={25} />
      </Components.CustomTooltip>

      <Components.CustomTooltip label='JavaScript'>
        <Icons.JavaScript color='#EFD81D' size={25} />
      </Components.CustomTooltip>

      <Components.CustomTooltip label='ReactJS'>
        <Icons.React color='#61DAFB' size={25} />
      </Components.CustomTooltip>

      <Components.CustomTooltip label='NextJS'>
        <Icons.NextJS color='#D7CCC8' size={25} />
      </Components.CustomTooltip>

      <Components.CustomTooltip label='NodeJS'>
        <Icons.NodeJS color='#6EA560' size={25} />
      </Components.CustomTooltip>

      <Components.CustomTooltip label='Linux'>
        <Icons.Linux color='#D7CCC8' size={25} />
      </Components.CustomTooltip>

      <Components.CustomTooltip label='Git'>
        <Icons.Git color='#E84E31' size={25} />
      </Components.CustomTooltip>

      <Components.CustomTooltip label='Html5'>
        <Icons.Html5 color='#00A2D6' size={25} />
      </Components.CustomTooltip>

      <Components.CustomTooltip label='CSS3'>
        <Icons.Css3 color='#00A2D6' size={25} />
      </Components.CustomTooltip>
    </Flex>
  )
}
