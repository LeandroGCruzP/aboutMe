import { Flex, Grid, GridItem, keyframes, Text, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'

export default function Home() {
  const animationKeyFrames = keyframes`
  0% { background-position: 0% }
  100% { background-position: 400% }
`

const animation = `${animationKeyFrames} 10s linear infinite`
const isPhoneVersion = useBreakpointValue({ base: true, lg: false })

return (
  <Grid
    flex='1'
    templateColumns={isPhoneVersion ? '1fr' : 'repeat(2, 1fr)'}
    templateRows={isPhoneVersion ? 'repeat(2, 1fr)' : 'none'}
    gap={5}
    pb={20}
  >
    <GridItem display='flex' justifyContent='center' alignContent='center'>
      {isPhoneVersion ? (
        <Image
          alt='Profile Image'
          src='/profileLeandro.png'
          height='500px'
          width='350px'
          priority
        />
      ) : (
        <Image
          alt='Profile Image'
          src='/profileLeandro.png'
          height='800px'
          width='600px'
          priority
        />
      )}
    </GridItem>

    <GridItem
      display='flex'
      alignItems={isPhoneVersion ? 'flex-start' : 'center'}
      justifyContent={isPhoneVersion ? 'center' : 'none'}
      gap={2}
    >
      <Flex flexDir='column' w='-webkit-max-content'>
        <Text
          bgGradient='linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)'
          bgClip='text'
          animation={animation}
          bgSize='400%'
          fontSize={['1.8rem', '1.8rem', '2.8rem', '3.8rem']}
          fontWeight='bold'
          letterSpacing='0.75rem'
        >
          COMPUTER
        </Text>
        <Text
          bgGradient='linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)'
          bgClip='text'
          animation={animation}
          bgSize='400%'
          fontSize={['1.5rem', '1.5rem', '2.5rem', '3.5rem']}
          fontWeight='semibold'
          letterSpacing='1.3rem'
        >
          ENGINEER
        </Text>
        <Text
          bgGradient='linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)'
          bgClip='text'
          animation={animation}
          bgSize='400%'
          fontSize={['1.2rem', '1.2rem', '2.2rem', '3.2rem']}
          fontWeight='light'
          letterSpacing='1.1rem'
        >
          FULLSTACK
        </Text>
      </Flex>
    </GridItem>
  </Grid>
)
}
