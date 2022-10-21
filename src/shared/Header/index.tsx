import { HStack } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { Components } from './components'
import { styles } from './styles'

interface LinksProps {
  label: string
  url: string
}

const links: LinksProps[] = [
  { label: `link_home`, url: '/' },
  { label: `link_about`, url: '/about' },
  { label: `link_projects`, url: '/projects' }
]

export function Header() {
  const { t } = useTranslation('header')

  return (
    <HStack {...styles.container}>
      {links.map((link, i) =>
        <Components.ActiveLink key={i} url={link.url} label={t(link.label)} />
      )}

      <Components.SelectLanguage />

      <Components.Command />
    </HStack>
  )
}
