import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'

export default function Home() {
  return (
    <Flex
      h="100vh"
      w="100vw"
      bg="#1C1C1C"
      bgImage="url(/Background.svg)"
      bgPosition="center"
      bgRepeat="repeat"
    >
      <Flex w="95%" h="100%" marginX="auto" flexDir="column">
        <Header />
        <Main />
      </Flex>
    </Flex>
  )
}
