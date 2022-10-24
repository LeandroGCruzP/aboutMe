import { chakra } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'

interface CustomImageProps {
  src: StaticImageData
  alt: string
}

export function CustomImage({ src, alt }: CustomImageProps) {
  const FormatImage = chakra(Image, {
    shouldForwardProp: prop => ['src', 'alt'].includes(prop),
  })

  return (
    <FormatImage
      src={src}
      alt={alt}
      borderRadius={10}
      border='1px solid'
    />
  )
}
