import { Flex } from '@chakra-ui/react'
import { useKBar } from 'kbar'
import { Icons } from '~/assets'

export function Command() {
  const { query } = useKBar()

  return (
    <Flex transition='0.2s filter' _hover={{ filter: 'brightness(1.2)' }} cursor='pointer'>
      <Icons.Command fontSize={24} onClick={query?.toggle}/>
    </Flex>
  )
}
