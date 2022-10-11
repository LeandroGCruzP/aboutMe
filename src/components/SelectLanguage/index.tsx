import {
  Button,
  Flex,
  Menu,
  MenuButton,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Flag from 'react-flagkit'
import { RiArrowDownSLine } from 'react-icons/ri'

export function SelectLanguage() {
  const router = useRouter()
  const isPhoneVersion = useBreakpointValue({ base: true, md: false })

  return (
    <Menu matchWidth autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            fontSize={15}
            fontWeight="normal"
            width={['5rem']}
            variant="filled"
            size="md"
            rightIcon={!isPhoneVersion && <RiArrowDownSLine />}
            zIndex="1"
          >
            <Flex flexDir="column" gap="5px">
              <Text align="start" fontSize={15}>
                <Flag country="US" size={20} />
              </Text>
            </Flex>
          </MenuButton>
        </>
      )}
    </Menu>
  )
}
