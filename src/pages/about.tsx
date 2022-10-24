import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import { Layouts } from '~/layout'
import { Shared } from '~/shared'

About.PageLayout = Layouts.Layout

export default function About() {
  const { t } = useTranslation('about')

  return (
    <>
      <Head>
        <title>Portfolio - About</title>
      </Head>

      <Grid flex='1' templateColumns='1fr' templateRows='(1fr, 1fr)' gap={2}>
        <GridItem display='flex' flexDir='column' alignItems='center' gap={2}>
          <Image
            alt='Profile Image'
            src='/profileLeandro.png'
            height='300px'
            width='206.12px'
            layout='fixed'
            priority
          />

          <Text fontSize={['md', 'lg', 'lg', 'lg', '2xl']} fontWeight='medium'>
            {t('greeting')}
          </Text>
        </GridItem>

        <GridItem flex='1' display='flex' justifyContent='center' pb={20}>
          <Flex
            maxW={['95%', '95%', '80%']}
            flexDir='column'
            gap={2}
            fontSize={['xs', 'sm', 'sm', 'sm', 'md']}
          >
            <Text textAlign='center'>
              {t('presentation_one')}
            </Text>

            <Text textAlign='center'>
              {t('presentation_two')}
            </Text>

            <Text mt={5} fontWeight='medium'>
              {t('subtitle_functions')}
            </Text>

            <Flex flexDir='column'>
              <li>{t('li_1')}</li>
              <li>{t('li_2')}</li>
              <li>{t('li_3')}</li>
              <li>{t('li_4')}</li>
              <li>{t('li_5')}</li>
              <li>{t('li_6')}</li>
              <li>{t('li_7')}</li>
              <li>{t('li_8')}</li>
            </Flex>

            <Text fontWeight='medium'>
              {t('subtitle_tools')}
            </Text>

            <Shared.Tools />
          </Flex>
        </GridItem>
      </Grid>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  return {
    props: {
      ...(await serverSideTranslations(String(ctx.locale), ['about', 'header', 'searcher']))
    }
  }
}
