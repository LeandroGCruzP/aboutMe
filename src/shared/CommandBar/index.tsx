import { Flex, Input } from '@chakra-ui/react'
import { KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarSearch } from 'kbar'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { Icons } from '~/assets'
import { Components } from './components'

interface CommandBarProps {
  children: React.ReactNode
}

export function CommandBar({ children }: CommandBarProps) {
  const { t } = useTranslation('searcher')
  const router = useRouter()

  const actions = [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['h'],
      keywords: 'home',
      section: 'Pages',
      perform: () => router.push('/'),
      icon: <Icons.Page fontSize={20} />,
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['a'],
      keywords: 'about',
      section: 'Pages',
      perform: () => router.push('/about'),
      icon: <Icons.Page fontSize={20} />,
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['p'],
      keywords: 'projects',
      section: 'Pages',
      perform: () => router.push('/projects'),
      icon: <Icons.Page fontSize={20} />,
    },
    {
      id: 'linkedin',
      name: 'Linkedin',
      shortcut: ['l'],
      keywords: 'linkedin',
      section: 'Links',
      perform: () => window.open('https://www.linkedin.com/in/lehcruz/', '_blank'),
      icon: <Icons.Linkedin fontSize={20} />,
    },
    {
      id: 'github',
      name: 'Github',
      shortcut: ['g'],
      keywords: 'github',
      section: 'Links',
      perform: () => window.open('https://github.com/LeandroGCruzP', '_blank'),
      icon: <Icons.Github fontSize={20} />,
    },
    {
      id: 'instagram',
      name: 'Instagram',
      shortcut: ['i'],
      keywords: 'instagram',
      section: 'Links',
      perform: () => window.open('https://www.instagram.com/leh_gcruz/', '_blank'),
      icon: <Icons.Instagram fontSize={20} />,
    },
    {
      id: 'whatsapp',
      name: 'Whatsapp',
      shortcut: ['w'],
      keywords: 'whatsapp',
      section: 'Links',
      perform: () => window.open('https://api.whatsapp.com/send?phone=5542998256197&text=Hi%20Leandro!%20Nice%20to%20meet%20you', '_blank'),
      icon: <Icons.Whatsapp fontSize={20} />,
    },
  ]

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <Flex as={KBarPositioner} bg='rgb(0, 0, 0, 0.6)'>
            <KBarAnimator>
              <Input
                as={KBarSearch}
                defaultPlaceholder={t('placeholder')}
                w={[350, 350, 600]}
                h={50}
                _placeholder= {{
                  color: '#686868'
                }}
                border={0}
                focusBorderColor='transparent'
                bg='#1C1C1C'
                borderRadius='10px 10px 0 0'
              />

              <Components.RenderResult />
            </KBarAnimator>
          </Flex>
        </KBarPortal>

        {children}
      </KBarProvider>
    </>
  )
}


