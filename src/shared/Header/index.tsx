import { HStack } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { Components } from './components'

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
    <HStack
      w='100%'
      h='50px'
      justify='flex-end'
      spacing={[4, 4, 4, 6, 8]}
      fontSize={['sm', 'md', 'md', 'md', 'lg']}
      fontWeight='medium'
      color='#D7CCC8'
      pr='10px'
    >
      {links.map((link, i) =>
        <Components.ActiveLink key={i} url={link.url} label={t(link.label)} />
      )}

      <Components.SelectLanguage />

      <Components.Command />
    </HStack>
  )
}
