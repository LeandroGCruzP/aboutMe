import { Flex, Input, Kbd, Text } from "@chakra-ui/react";
import { KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarResults, KBarSearch, useMatches } from "kbar";
import { useRouter } from "next/router";

interface CommandBarProps {
  children: React.ReactNode
}

export function CommandBar(props: CommandBarProps) {
  const { children } = props
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
                w={[350, 350, 600]}
                h={50}
                as={KBarSearch}
                defaultPlaceholder='Type a command or search'
                _placeholder={{ color: '#686868' }}
                border='0'
                focusBorderColor='transparent'
                bg='#1C1C1C'
                borderRadius='10px 10px 0 0'
              />

              <RenderResult />
            </KBarAnimator>
          </Flex>
        </KBarPortal>

        {children}
      </KBarProvider>
    </>
  )
}

function RenderResult() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        console.log(item, active)

        return (
          typeof item === 'string'
          ? (
            <Text fontSize={['xs', 'sm', 'sm', 'sm', 'md']} fontWeight='medium'>
              {item}
            </Text>
          )
          : (
            <Flex
              align='center'
              bg={active ? '#1C1C1C' : 'transparent'}
              p='5px 10px'
              h='50px'
              cursor='pointer'
              borderRadius={item.id === 'projects' ? '0 0 10px 10px' : 0}
              justify='space-between'
            >
              <Text>{item.name}</Text>
              {item.id === 'home' && <Kbd>H</Kbd>}
              {item.id === 'about' && <Kbd>A</Kbd>}
              {item.id === 'projects' && <Kbd>P</Kbd>}
            </Flex>
          )
        )
      }
      }
    />
  )
}

RenderResult.displayName = 'RenderResult'
