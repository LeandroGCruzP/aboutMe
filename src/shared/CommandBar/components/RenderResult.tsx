import { Flex, Kbd, Text } from '@chakra-ui/react'
import { KBarResults, useMatches } from 'kbar'

export function RenderResult() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        return (
          typeof item === 'string' ?
          (
            <Flex
              fontSize={['xs', 'sm', 'sm', 'sm', 'md']}
              fontWeight='medium'
              bg='#1C1C1C'
              color= '#7e7e7e'
              px='12px'
            >
              <Text>{item}</Text>
            </Flex>
          ) : (
            <Flex
              align='center'
              bg={active ? '#222222' : '#1C1C1C'}
              borderLeft='3px solid'
              borderColor={active ? '#FF0000' : 'transparent'}
              p='5px 10px'
              h='50px'
              cursor='pointer'
              borderRadius={item.id === 'projects' ? '0 0 10px 10px' : 0}
              justify='space-between'
            >
              <Flex gap={2}>
                {item.icon}
                <Text>{item.name}</Text>
              </Flex>

              <Flex
                bg='#383838'
                borderRadius={3}
                w='25px'
                h='25px'
                align='center'
                justify='center'
              >
                <Kbd
                  fontSize={['xs', 'sm', 'sm', 'sm', 'md']}
                  fontWeight='bold'
                  border={0}
                  color={'#000000'}
                >
                  {String(item.shortcut).toUpperCase()}
                </Kbd>
              </Flex>
            </Flex>
          )
        )
      }
      }
    />
  )
}
