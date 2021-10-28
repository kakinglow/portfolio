import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'

import Container from '../components/Container'


export default function Home() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Temp title</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I am Ka King Low</Heading>
          <Text color={colorSecondary[colorMode]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a ipsum eget elit malesuada eleifend at quis lectus. Quisque porta volutpat enim, at bibendum orci rutrum vel. Etiam bibendum elementum erat, eget rutrum mi ullamcorper sed. Nulla scelerisque ultrices scelerisque. Curabitur a leo eget purus tincidunt dictum</Text>
        </Flex>
      </Stack>
    </Container>
  )
}
