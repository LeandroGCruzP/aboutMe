import { Flex, Grid, GridItem, keyframes, Text, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import { Icons } from '@/assets/index'

export default function Home() {
  const animationKeyFrames = keyframes`
  0% { background-position: 0% }
  100% { background-position: 400% }
`

const isPhoneVersion = useBreakpointValue({ base: true, md: false })

const animation = `${animationKeyFrames} 10s linear infinite`

const phone = '+5542998256197'
const urlAPIWhatsapp = `https://api.whatsapp.com/send?phone=${phone}`

return (
  <Grid
    flex={1}
    templateColumns={isPhoneVersion ? '50px 1fr' : '50px repeat(2, 1fr)'}
    templateRows={isPhoneVersion ? 'repeat(2, 1fr)' : 'none'}
    alignContent="center"
  >
    <GridItem rowSpan={2}>
      <Flex
        gap={4}
        h="100%"
        flexDir="column"
        justifyContent={isPhoneVersion ? 'flex-start' : 'center'}
        pt={isPhoneVersion ? '25px' : 0}
      >
        <Flex cursor="pointer" maxW="-webkit-max-content">
          <Link
            href="https://www.linkedin.com/in/leandrogcruzp/"
            target="_blank"
          >
            <Icons.Linkedin size={30} />
          </Link>
        </Flex>
        <Flex cursor="pointer" maxW="-webkit-max-content">
          <Link href="https://github.com/LeandroGCruzP" target="_blank">
            <Icons.Github size={30} />
          </Link>
        </Flex>
        <Flex cursor="pointer" maxW="-webkit-max-content">
          <Link href="https://www.instagram.com/leh_gcruz/" target="_blank">
            <Icons.Instagram size={30} />
          </Link>
        </Flex>
        <Flex cursor="pointer" maxW="-webkit-max-content">
          <Link
            rel="noopener noreferrer"
            href={urlAPIWhatsapp}
            target="_blank"
          >
            <Icons.Whatsapp size={30} />
          </Link>
        </Flex>
      </Flex>
    </GridItem>

    <GridItem display="flex" justifyContent="center" alignContent="center">
      <Image
        alt='Profile Image'
        src='/profileLeandro.png'
        height='800px'
        width='600px'
        priority
      />
    </GridItem>

    <GridItem
      display="flex"
      alignItems={isPhoneVersion ? 'flex-start' : 'center'}
      justifyContent={isPhoneVersion ? 'center' : 'none'}
      gap={2}
    >
      <Flex flexDir="column" w="-webkit-max-content">
        <Text
          bgGradient="linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)"
          bgClip="text"
          animation={animation}
          bgSize="400%"
          fontSize={['2rem', '3rem', '4rem']}
          fontWeight="bold"
          letterSpacing="0.75rem"
        >
          COMPUTER
        </Text>
        <Text
          bgGradient="linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)"
          bgClip="text"
          animation={animation}
          bgSize="400%"
          fontSize={['1.8rem', '2.8rem', '3.8rem']}
          fontWeight="semibold"
          letterSpacing="1.3rem"
        >
          ENGINEER
        </Text>
        <Text
          bgGradient="linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)"
          bgClip="text"
          animation={animation}
          bgSize="400%"
          fontSize={['1.6rem', '2.6rem', '3.6rem']}
          fontWeight="light"
          letterSpacing="1.1rem"
        >
          FULLSTACK
        </Text>
      </Flex>
    </GridItem>
  </Grid>
)
}
