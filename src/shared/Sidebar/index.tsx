import { Flex } from '@chakra-ui/react'
import { Icons } from '~/assets'
import { Components } from './components'

const urlLinkedin = 'https://www.linkedin.com/in/leandrogcruzp/'
const urlGithub = 'https://github.com/LeandroGCruzP'
const urlInstagram = 'https://www.instagram.com/leh_gcruz/'
const phone = '+5542998256197'
const urlAPIWhatsapp = `https://api.whatsapp.com/send?phone=${phone}`

export function Sidebar() {
  return (
    <Flex h='100%' w='40px' flexDir='column' justify='space-between' >
      <Components.Logo url='/' />

      <Flex gap='5' flexDir='column' align='center' >
        <Components.SocialMedia label='Linkedin' url={urlLinkedin}>
          <Icons.Linkedin size={22} cursor='pointer' color='#D7CCC8' />
        </Components.SocialMedia>

        <Components.SocialMedia label='Github' url={urlGithub}>
          <Icons.Github size={23} cursor='pointer' color='#D7CCC8' />
        </Components.SocialMedia>

        <Components.SocialMedia label='Instagram' url={urlInstagram}>
          <Icons.Instagram size={20} cursor='pointer' color='#D7CCC8' />
        </Components.SocialMedia>

        <Components.SocialMedia label='Whatsapp' url={urlAPIWhatsapp}>
          <Icons.Whatsapp size={20} cursor='pointer' color='#D7CCC8' />
        </Components.SocialMedia>

        <Flex h='100px' w='3px' bg='#FF0000' />
      </Flex>
    </Flex>
  )
}
