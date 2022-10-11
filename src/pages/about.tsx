import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { Icons } from '../assets/icons'

export default function About() {
  const isPhoneVersion = useBreakpointValue({ base: true, md: false })
  const phone = '+5542998256197'
  const urlAPIWhatsapp = `https://api.whatsapp.com/send?phone=${phone}`

  return (
    <Flex w="100%" h="100%" overflowX="hidden">
      <Grid
        templateColumns="50px 1fr"
        templateRows="repeat(3, 1fr)"
        w="100%"
        gap={2}
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

        <GridItem display="flex" flexDir="column" alignItems="center" gap={2}>
          <Flex as="span">
            <Image
              borderRadius="full"
              boxSize={['100px', '200px', '250px', '300px']}
              src="https://github.com/leandroGCruzP.png"
              alt="Leandro Cruz"
            />
          </Flex>
          <Text fontSize={['md', 'lg', 'lg', 'lg', '2xl']} fontWeight="bold">
            Hi, i am Leandro, nice to meet you!
          </Text>
        </GridItem>

        <GridItem display="flex" justifyContent="center">
          <Flex
            maxW="700px"
            flexDir="column"
            gap={2}
            fontSize={['xs', 'sm', 'sm', 'sm', 'md']}
          >
            <Text>
              Hi 👋, my name is Leandro but you can call me Le. I am 25 years
              old and I have been married for 5 years. I was born in Chile, but
              currently I live in Londrina, Paraná, Brazil.
            </Text>

            <Text>
              I have a degree in computer engineering and I am currently working
              as a systems analyst.
            </Text>

            <Text>
              My main tools are: Node | React | React Native | TypeScript |
              Prisma (ORM) | Git
            </Text>
          </Flex>
        </GridItem>

        <GridItem></GridItem>
      </Grid>
    </Flex>
  )
}
