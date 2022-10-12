import { Box, Flex, Grid, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function Projects() {
  return (
    <Flex w="100%" h="100%" overflowX="hidden">
      <Grid
        templateColumns="1fr"
        w="100%"
        h="100%"
        overflowY="auto"
        display='flex'
        justifyContent='center'
        css={{
          '::-webkit-scrollbar': {
            width: 12
          },
          '::-webkit-scrollbar-track': {
            background: '#222222',
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#131313',
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5
          }
        }}
      >
        <GridItem>
          <SimpleGrid
            flex="1"
            gap={5}
            minChildWidth={['320px', '340px', '360px', '380px']}
            alignContent="flex-start"
            p={5}
          >
            {/* //Linkedin */}
            <Box
              w={['320px', '340px', '360px', '380px']}
              h="280"
              borderRadius={8}
            >
              <Text textAlign="center" pb={1} fontWeight="bold">
                Clone Linkedin
              </Text>
              <Link href="https://clone-linkedin-shimmer.netlify.app/" passHref>
                <a target="_blank">
                  <Image
                    src="./images/Linkedin.png"
                    alt="Clone Linkedin"
                    borderRadius="10"
                  />
                </a>
              </Link>
              <Text pt={1} fontSize={['xs', 'sm', 'sm', 'sm', 'md']}>
                Working with responsivity with 3 columns.
              </Text>
            </Box>

            {/* //Vercel */}
            <Box
              w={['320px', '340px', '360px', '380px']}
              h="280"
              borderRadius={8}
            >
              <Text textAlign="center" pb={1} fontWeight="bold">
                Clone Vercel
              </Text>
              <Link href="https://clone-vercel.netlify.app/" passHref>
                <a target="_blank">
                  <Image
                    src="./images/Vercel.png"
                    alt="Clone Vercel"
                    borderRadius="10"
                  />
                </a>
              </Link>
              <Text pt={1} fontSize={['xs', 'sm', 'sm', 'sm', 'md']}>
                Handling title effect.
              </Text>
            </Box>

            {/* //Twitter */}
            <Box
              w={['320px', '340px', '360px', '380px']}
              h="280"
              borderRadius={8}
            >
              <Text textAlign="center" pb={1} fontWeight="bold">
                Clone Twitter
              </Text>
              <Link
                href="https://clone-twitter-responsive.netlify.app/"
                passHref
              >
                <a target="_blank">
                  <Image
                    src="./images/Twitter.png"
                    alt="Clone Twitter"
                    borderRadius="10"
                  />
                </a>
              </Link>

              <Text pt={1} fontSize={['xs', 'sm', 'sm', 'sm', 'md']}>
                Improved responsivity work with 3 columns.
              </Text>
            </Box>

            {/* //Pinterest */}
            <Box
              w={['320px', '340px', '360px', '380px']}
              h="280"
              borderRadius={8}
            >
              <Text textAlign="center" pb={1} fontWeight="bold">
                Clone Pinterest
              </Text>
              <Link href="https://clone-pinterest.netlify.app/" passHref>
                <a target="_blank">
                  <Image
                    src="./images/Pinterest.png"
                    alt="Clone Pinterest"
                    borderRadius="10"
                  />
                </a>
              </Link>
              <Text pt={1} fontSize={['xs', 'sm', 'sm', 'sm', 'md']}>
                Custom image placement.
              </Text>
            </Box>

            {/* //Mercado Livre */}
            <Box
              w={['320px', '340px', '360px', '380px']}
              h="280"
              borderRadius={8}
            >
              <Text textAlign="center" pb={1} fontWeight="bold">
                Clone Mercado Livre
              </Text>
              <Link href="https://clone-mercado-livre.netlify.app/" passHref>
                <a target="_blank">
                  <Image
                    src="./images/Mercado_Livre.png"
                    alt="Clone Mercado Livre"
                    borderRadius="10"
                  />
                </a>
              </Link>
              <Text pt={1} fontSize={['xs', 'sm', 'sm', 'sm', 'md']}>
                Product sales page basics.
              </Text>
            </Box>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Flex>
  )
}
