import { Flex, Grid, GridItem, Kbd, keyframes, Text, useBreakpointValue } from '@chakra-ui/react'
import { useKBar } from 'kbar'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import { Icons } from '~/assets'
import { Layouts } from '~/layout'

Home.PageLayout = Layouts.Layout

export default function Home() {
  const { t } = useTranslation('home')
  const { query } = useKBar()

  const animationKeyFrames = keyframes`
    0% { background-position: 0% }
    100% { background-position: 400% }
  `
  const animation = `${animationKeyFrames} 10s linear infinite`
  const gradient = 'linear(to-r, #ff0000, #ffff00,#ff00f3,#0033ff,#ff00c4, #ff0000)'

  const isPhoneVersion = useBreakpointValue({ base: true, lg: false })
  const isTabletVersion = useBreakpointValue({ base: true, xl: false })

  return (
    <>
      <Head>
        <title>Portfolio - Home</title>
      </Head>

      <Grid
        flex='1'
        templateColumns={isPhoneVersion ? '1fr' : 'repeat(2, 1fr)'}
        templateRows={isPhoneVersion ? 'repeat(2, 2fr, 1fr)' : 'none'}
        gap={5}
      >
        <GridItem display='flex' justifyContent='center' alignItems='flex-end'>
          {isPhoneVersion ? (
            <Image
              alt={t('alt_image')}
              src='/profileLeandro.png'
              height='400px'
              width='274.82px'
              layout='fixed'
              priority
            />
          ) : isTabletVersion ? (
            <Image
              alt={t('alt_image')}
              src='/profileLeandro.png'
              height='600px'
              width='400px'
              layout='fixed'
              priority
            />
          ) : (
            <Image
              alt={t('alt_image')}
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
              bgGradient={gradient}
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
              bgGradient={gradient}
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
              bgGradient={gradient}
              bgClip='text'
              animation={animation}
              bgSize='400%'
              fontSize={['1.2rem', '1.2rem', '2.2rem', '3.2rem']}
              fontWeight='light'
              letterSpacing='1.1rem'
            >
              FULLSTACK
            </Text>

            <Flex
              onClick={query?.toggle}
              cursor='pointer'
              align='center'
              gap={2}
              mt={2}
            >
              <Text
                fontSize={['xs', 'sm', 'sm', 'sm', 'md']}
                fontWeight='medium'
              >
                {t('action_press')} <Kbd bg='#1C1C1C'>ctrl</Kbd> +{' '}
                <Kbd bg='#1C1C1C'>k</Kbd> {t('action_to_navigate')}
              </Text>

              <Icons.Rocket fontSize={15} />
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { locale } = ctx

  return {
    props: {
      ...(await serverSideTranslations(String(locale), ['home', 'header', 'searcher']))
    }
  }
}
