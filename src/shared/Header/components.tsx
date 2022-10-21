import { Flex, Link as ChakraLink, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import { useKBar } from 'kbar'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Flag from 'react-flagkit'
import { Icons } from '~/assets'
import { styles } from './styles'

export const Components = { ActiveLink, SelectLanguage, Command }

interface ActiveLinkProps {
  url: string
  label: string
}

type LanguageProps = 'pt' | 'es' | 'en'

function ActiveLink({ url, label }: ActiveLinkProps) {
  const { asPath } = useRouter()

  return (
    <Text {...styles.text}>
      <Link href={url}>
        <ChakraLink
          borderBottom={asPath === url ? '3px solid #FF0000' : ''}
          {...styles.chakraLink}
        >
          {label}
        </ChakraLink>
      </Link>
    </Text>
  )
}

function SelectLanguage() {
  const router = useRouter()
  const { i18n } = useTranslation('header')

  const [language, setLanguage] = React.useState(i18n.language as LanguageProps)

  function handleSelectLanguage(language: LanguageProps): void {
    setLanguage(language)

    router.push(router.asPath, undefined, { locale: language })
  }

  return (
    <Menu autoSelect={false}>
      <MenuButton {...styles.menuButton}>
        {language === 'pt' ? <Flag country='BR' size={27} />
          : language === 'en' ? <Flag country='US' size={27} />
            : language === 'es' && <Flag country='CL' size={27} />
        }
      </MenuButton>

      <MenuList {...styles.menuList}>
        <MenuItem onClick={() => handleSelectLanguage('en')} {...styles.menuItem}>
          <Text>English</Text>
          <Flag country='US' size={22} />
        </MenuItem>

        <MenuItem onClick={() => handleSelectLanguage('pt')} {...styles.menuItem}>
          <Text>Português</Text>
          <Flag country='BR' size={22} />
        </MenuItem>

        <MenuItem onClick={() => handleSelectLanguage('es')} {...styles.menuItem}>
          <Text>Español</Text>
          <Flag country='CL' size={22} />
        </MenuItem>
      </MenuList>
    </Menu>
  )

}

function Command() {
  const { query } = useKBar()

  return (
    <Flex transition='0.2s filter' _hover={{ filter: 'brightness(1.2)' }} cursor='pointer'>
      <Icons.Command fontSize={24} onClick={query?.toggle}/>
    </Flex>
  )
}
