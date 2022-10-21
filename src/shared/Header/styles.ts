import { LinkProps, MenuButtonProps, MenuItemProps, MenuListProps, StackProps, TextProps } from '@chakra-ui/react'

const container: StackProps = {
  w: '100%',
  h: '50px',
  justifyContent: 'flex-end',
  spacing: [4, 4, 4, 6, 8 ],
  fontSize: ['sm', 'md', 'md', 'md', 'lg'],
  fontWeight: 'medium',
  color: '#D7CCC8',
  pr: '10px',
}

const text: TextProps = {
  cursor: 'pointer'
}

const chakraLink: LinkProps = {
  transition: '0.2s filter',
  _hover: {
    filter: 'brightness(1.2)'
  },
}

const menuButton: MenuButtonProps = {
  transition: '0.2s filter',
  _hover: {
    filter: 'brightness(1.2)',
  },
}

const menuList: MenuListProps = {
  bg: '#1C1C1C',
  maxH: '260px',
  overflow: 'auto',
  border: '1px solid #353646',
}

const menuItem: MenuItemProps = {
  px: '5px',
  borderLeft: '3px solid transparent',
  justifyContent: 'space-between',
  fontSize: ['sm', 'md', 'md', 'md', 'lg'],
  transition: '0.2s filter',
  _hover: {
    borderColor: '#FF0000',
    filter: 'brightness(1.2)',
  }
}

export const styles = { container, text, chakraLink, menuButton, menuList, menuItem }
