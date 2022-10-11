import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { Icons } from '../../assets/icons'
import { SelectLanguage } from '../SelectLanguage'

export function Header() {
  const isPhoneVersion = useBreakpointValue({ base: true, md: false })

  return (
    <Flex
      w="100%"
      h="60px"
      align="center"
      justify="flex-end"
      gap={5}
      color="white"
    >
      <Flex flex={1} justifyContent="space-between">
        <Flex>
          <Icons.Rocket size={30} />
        </Flex>
        <Flex gap={5}>
          <Text fontWeight="medium" fontSize={20}>
            Home
          </Text>
          <Text fontWeight="medium" fontSize={20}>
            About
          </Text>
          <Text fontWeight="medium" fontSize={20}>
            Project
          </Text>
        </Flex>
      </Flex>
      <SelectLanguage />
    </Flex>
  )
}
