import { Flex, Input } from '@chakra-ui/react'
import { KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarSearch } from 'kbar'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
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
      perform: () => router.push('/')
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['a'],
      keywords: 'about',
      perform: () => router.push('/about')
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['p'],
      keywords: 'projects',
      perform: () => router.push('/projects')
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


