import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Link from 'next/link'
import { Layouts } from '~/layout'

Projects.PageLayout = Layouts.Layout

export default function Projects() {
  const { t } = useTranslation('projects')

  return (
    <>
      <Head>
        <title>Portfolio - Projects</title>
      </Head>

      <SimpleGrid
        flex='1'
        gap={5}
        minChildWidth={['280px', '300px', '320px', '340px']}
        p='10px 10px 0 10px'
      >
        <Box borderRadius={8}>
          <Text textAlign='center' pb={1} fontWeight='bold'>
            Clone Linkedin
          </Text>
          <Link href='https://clone-linkedin-shimmer.netlify.app/' passHref>
            <a target='_blank'>
              <Image
                src='./images/Linkedin.png'
                alt='Clone Linkedin'
                borderRadius='10'
              />
            </a>
          </Link>

          <Text pt={1} fontSize={['xs', 'sm', 'sm', 'sm', 'md']}>
            {t('linkedin_caption')}
          </Text>
        </Box>

        <Box borderRadius={8}>
          <Text textAlign='center' pb={1} fontWeight='bold'>
            Clone Vercel
          </Text>
          <Link href='https://clone-vercel.netlify.app/' passHref>
            <a target='_blank'>
              <Image
                src='./images/Vercel.png'
                alt='Clone Vercel'
                borderRadius='10'
              />
            </a>
          </Link>

          <Text pt={1} fontSize={['xs', 'sm', 'sm', 'sm', 'md']}>
            {t('vercel_caption')}
          </Text>
        </Box>

        <Box borderRadius={8}>
          <Text textAlign='center' pb={1} fontWeight='bold'>
            Clone Twitter
          </Text>
          <Link href='https://clone-twitter-responsive.netlify.app/' passHref>
            <a target='_blank'>
              <Image
                src='./images/Twitter.png'
                alt='Clone Twitter'
                borderRadius='10'
              />
            </a>
          </Link>

          <Text pt={1} fontSize={['xs', 'sm', 'sm', 'sm', 'md']}>
            {t('twitter_caption')}
          </Text>
        </Box>

        <Box borderRadius={8}>
          <Text textAlign='center' pb={1} fontWeight='bold'>
            Clone Pinterest
          </Text>
          <Link href='https://clone-pinterest.netlify.app/' passHref>
            <a target='_blank'>
              <Image
                src='./images/Pinterest.png'
                alt='Clone Pinterest'
                borderRadius='10'
              />
            </a>
          </Link>

          <Text pt={1} fontSize={['xs', 'sm', 'sm', 'sm', 'md']}>
            {t('pinterest_caption')}
          </Text>
        </Box>

        <Box borderRadius={8}>
          <Text textAlign='center' pb={1} fontWeight='bold'>
            Clone Mercado Livre
          </Text>
          <Link href='https://clone-mercado-livre.netlify.app/' passHref>
            <a target='_blank'>
              <Image
                src='./images/Mercado_Livre.png'
                alt='Clone Mercado Livre'
                borderRadius='10'
              />
            </a>
          </Link>

          <Text pt={1} fontSize={['xs', 'sm', 'sm', 'sm', 'md']}>
            {t('mercado_livre_caption')}
          </Text>
        </Box>

        <Box borderRadius={8}>
          <Text textAlign='center' pb={1} fontWeight='bold'>
            DashGo
          </Text>
          <Link href='https://dashpro.vercel.app/' passHref>
            <a target='_blank'>
              <Image
                src='./images/Dashgo.png'
                alt='Page DashGo'
                borderRadius='10'
              />
            </a>
          </Link>

          <Text pt={1} fontSize={['xs', 'sm', 'sm', 'sm', 'md']}>
            {t('dash_go_caption')}
          </Text>
        </Box>
      </SimpleGrid>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  return {
    props: {
      ...(await serverSideTranslations(String(ctx.locale), ['projects', 'header', 'searcher']))
    }
  }
}
