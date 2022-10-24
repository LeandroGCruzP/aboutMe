import { Flex, Kbd, Text } from '@chakra-ui/react'
import { KBarResults, useMatches } from 'kbar'

// RenderResult.displayName = 'RenderResult'

export function RenderResult() {
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
              {item.id === 'home' && <Kbd bg='#1C1C1C'>H</Kbd>}
              {item.id === 'about' && <Kbd bg='#1C1C1C'>A</Kbd>}
              {item.id === 'projects' && <Kbd bg='#1C1C1C'>P</Kbd>}
            </Flex>
          )
        )
      }
      }
    />
  )
}
