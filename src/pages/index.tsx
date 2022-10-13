import { Flex, Grid, GridItem, Kbd, keyframes, Text, useBreakpointValue } from '@chakra-ui/react'
import { useKBar } from 'kbar'
import Image from 'next/image'
import { Icons } from '../assets'

export default function Home() {
  const { query } = useKBar()
  const animationKeyFrames = keyframes`
  0% { background-position: 0% }
  100% { background-position: 400% }
`

const animation = `${animationKeyFrames} 10s linear infinite`

const isPhoneVersion = useBreakpointValue({ base: true, lg: false })
const isTabletVersion = useBreakpointValue({ base: true, xl: false })

return (
  <Grid
    flex='1'
    templateColumns={isPhoneVersion ? '1fr' : 'repeat(2, 1fr)'}
    templateRows={isPhoneVersion ? 'repeat(2, 2fr, 1fr)' : 'none'}
    gap={5}
  >
    <GridItem display='flex' justifyContent='center' alignItems='flex-end'>
      {isPhoneVersion ? (
        <Image
          alt='Profile Image'
          src='/profileLeandro.png'
          height='400px'
          width='274.82px'
          layout='fixed'
          priority
        />
      ) : isTabletVersion ? (
        <Image
          alt='Profile Image'
          src='/profileLeandro.png'
          height='600px'
          width='400px'
          layout='fixed'
          priority
        />
      ) : (
        <Image
          alt='Profile Image'
          src='/profileLeandro.png'
          height='700px'
          width='480.94px'
          layout='fixed'
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

        <Flex onClick={query?.toggle} cursor='pointer' align='center' gap={2}>
          <Text fontSize={['xs', 'sm', 'sm', 'sm', 'md']} fontWeight='medium'>
            Press <Kbd>ctrl</Kbd> + <Kbd>k</Kbd> to navigate
          </Text>

          <Icons.Rocket fontSize={15} />
        </Flex>
      </Flex>
    </GridItem>
  </Grid>
)
}
