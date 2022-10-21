import { FlexProps, TooltipProps } from '@chakra-ui/react'

const container: FlexProps = {
  h: '100%',
  w: '40px',
  flexDir: 'column',
  justify: 'space-between',
}

const logo: FlexProps = {
  justify: 'center',
  h: '50px',
  align: 'center',
}

const wrapper: FlexProps = {
  gap: 5,
  flexDir: 'column',
  align: 'center',
}

const socialMedia: TooltipProps = {
  placement: 'right',
  color: '#D7CCC8',
  bg: '#1C1C1C',
  border: '1px solid #D7CCC8',
} as TooltipProps

const lineVertical: FlexProps = {
  h: '100px',
  w: '3px',
  bg: '#FF0000',
}

export const styles = { container, logo, wrapper, socialMedia, lineVertical }
