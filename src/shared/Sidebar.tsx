import { Flex, Tooltip } from '@chakra-ui/react'
import Link from 'next/link'
import { Icons } from '~/assets'

const phone = '+5542998256197'
const urlAPIWhatsapp = `https://api.whatsapp.com/send?phone=${phone}`
const urlLinkedin = 'https://www.linkedin.com/in/leandrogcruzp/'
const urlGithub = 'https://github.com/LeandroGCruzP'
const urlInstagram = 'https://www.instagram.com/leh_gcruz/'

export function Sidebar() {
  return (
    <Flex h='100%' flexDir='column' justify='space-between' pt={['10px', '10px', '20px']} >
        <Link href='/'>
          <Icons.Rocket size={30} cursor='pointer' color='#D7CCC8' />
        </Link>

        <Flex gap={5} flexDir='column' align='center'>
          <Tooltip label='Linkedin' placement='right' color='#D7CCC8' bg='#1C1C1C' border='1px solid #D7CCC8' >
            <Flex>
              <Link href={urlLinkedin}>
                <Icons.Linkedin size={22} cursor='pointer' color='#D7CCC8' />
              </Link>
            </Flex>
          </Tooltip>

          <Tooltip label='Github' placement='right' color='#D7CCC8' bg='#1C1C1C' border='1px solid #D7CCC8' >
            <Flex>
              <Link href={urlGithub}>
                    <Icons.Github size={23} cursor='pointer' color='#D7CCC8' />
              </Link>
            </Flex>
          </Tooltip>

          <Tooltip label='Instagram' placement='right' color='#D7CCC8' bg='#1C1C1C' border='1px solid #D7CCC8' >
            <Flex>
              <Link href={urlInstagram}>
                  <Icons.Instagram size={20} cursor='pointer' color='#D7CCC8' />
              </Link>
            </Flex>
          </Tooltip>

          <Tooltip label='Whatsapp' placement='right' color='#D7CCC8' bg='#1C1C1C' border='1px solid #D7CCC8' >
            <Flex>
              <Link href={urlAPIWhatsapp}>
                <Icons.Whatsapp size={20} cursor='pointer' color='#D7CCC8' />
              </Link>
            </Flex>
          </Tooltip>

          <Flex h='100px' w='2px' bg='#FF0000' />
        </Flex>
      </Flex>
  )
}
