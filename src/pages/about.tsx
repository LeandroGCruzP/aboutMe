import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text
} from '@chakra-ui/react'
import Link from 'next/link'
import { Icons } from '../assets/icons'

export default function About() {
  const phone = '+5542998256197'
  const urlAPIWhatsapp = `https://api.whatsapp.com/send?phone=${phone}`

  return (
    <Flex w="100%" h="100%" overflowX="hidden">
      <Grid
        templateColumns="50px 1fr"
        templateRows="repeat(3, 1fr)"
        w="100%"
        gap={2}
        overflowY='auto'
        css={{
          '::-webkit-scrollbar': {
            width: 12,
          },
          '::-webkit-scrollbar-track': {
            background: '#C9C9C9',
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#353646',
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          },
        }}
      >
        <GridItem rowSpan={3}>
          <Flex gap={4} h="100%" flexDir="column" justifyContent="center">
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

        <GridItem mt={5} display="flex" flexDir="column" alignItems="center" gap={2}>
          <Flex as="span">
            <Image
              borderRadius="full"
              boxSize={['100px', '200px', '250px', '300px']}
              src="https://github.com/leandroGCruzP.png"
              alt="Leandro Cruz"
            />
          </Flex>
          <Text fontSize={['md', 'lg', 'lg', 'lg', '2xl']} fontWeight="medium">
            Hi, I am Leandro, nice to meet you!
          </Text>
        </GridItem>

        <GridItem display="flex" justifyContent="center">
          <Flex
            maxW="700px"
            flexDir="column"
            gap={2}
            fontSize={['xs', 'sm', 'sm', 'sm', 'md']}
          >
            <Text textAlign='center'>
              I am 25 years old and I have been married for 5 years. I was born in Chile, but
              currently I live in Londrina, Paraná, Brazil. My objetives to 2022 is learn speak English and meet developers of other countries.
            </Text>

            <Text textAlign='center'>
              I have a license in Computer Engineer and currently working as a Systems Analyst from Aceno Tecnologia.
            </Text>

            <Text mt={5} fontWeight='medium'>
              My main functions are:
            </Text>

            <Flex flexDir='column'>
              <li>Assist in the specification and documentation of systems</li>
              <li>Assist in defining tools and technologies</li>
              <li>Assist in defining the APIs of the platform under development</li>
              <li>Elaboration of the visual design of web systems and mobile applications (Android and iOS)</li>
              <li>Front-end development of web systems</li>
              <li>Mobile application development for Android and iOS</li>
              <li>Systems testing and validation</li>
              <li>Work cooperatively with the other members of the company's technical and development team</li>
            </Flex>

            <Text fontWeight='medium'>
              My main tools are:
            </Text>

            <Flex flexDir='column'>
              <Text textAlign='center'>HTML5 | CSS3 | JavaScript | TypeScript | React | NextJS | React Native | Node | APIs Rest | Linux | Git</Text>
            </Flex>
          </Flex>
        </GridItem>

        <GridItem></GridItem>
      </Grid>
    </Flex>
  )
}
