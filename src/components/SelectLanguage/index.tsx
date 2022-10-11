import {
  Button, Menu,
  MenuButton, useBreakpointValue
} from '@chakra-ui/react'
import Flag from 'react-flagkit'
import { RiArrowDownSLine } from 'react-icons/ri'

export function SelectLanguage() {
  const isPhoneVersion = useBreakpointValue({ base: true, md: false })

  return (
    <Menu matchWidth autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            variant="filled"
            rightIcon={!isPhoneVersion && <RiArrowDownSLine />}
            zIndex="1"
          >
            <Flag country="US" />
          </MenuButton>
        </>
      )}
    </Menu>
  )
}
