
import { ChakraProvider, theme, Heading, Text, Box, Badge, Flex, Spacer, Button, Image, SimpleGrid, AspectRatio } from '@chakra-ui/react'

function TopHeading() {
  return (
    <Box maxW="2xl" m="0 auto">
      <Heading as="h1" textAlign="center" fontSize="7xl" mt="100px">
        Find a Home Away from Home
      </Heading>
      <Text fontSize="xl" textAlign="center" mt="30px">
        We are the world's leading home rental service with over 10 thousand home owners matched
        with customers annually
      </Text>
      <Text
        w="fit-content"
        p="4"
        px="50px"
        bg="blue.300"
        borderRadius="10px"
        m="0 auto"
        mt="8"
        fontWeight="bold"
        color="white"
        fontSize="xl"
      >
        Get Started
      </Text>
    </Box>
  )
}
const NavBar = () => (
  <Flex>
    <Box p="2">
      <Heading size="md">Chakra App</Heading>
    </Box>
    <Spacer />
    <Box>
      <Button colorScheme="teal" mr="4">
        Sign Up
      </Button>
      <Button colorScheme="teal">Log in</Button>
    </Box>
  </Flex>
)
function TopDestinations() {
  return (
    <>
      <Text fontSize="5xl" fontWeight="bold" textAlign="center" mt="100px" mb="30px">
        Top Destinations
      </Text>
      <Flex w="min-content" m="0 auto">
        <Destination />
        <Destination />
        <Destination />
      </Flex>
    </>
  )
}

function Destination() {
  return (
    <Box m="8" border="1px solid" borderColor="gray.400" w="300px" borderRadius="lg">
      <Box w="100%" h="200px" bg="gray.100" borderTopRadius="lg">
        <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
      </Box>
      <Box p="4">

        <Badge fontSize="0.8em" colorScheme="red">
          Popular
        </Badge>
        <Text fontSize="2xl" fontWeight="bold">
          Brawhala
        </Text>
        <Text fontSize="xs" mb="6">
          Toronto, Canada
        </Text>
        <Flex>
          <Text fontSize="xs">Starting at $50/day</Text>
          <Spacer />
          <Button size="xs">Expand</Button>
        </Flex>
      </Box>
    </Box>
  )
}
function RightFeature() {
  return (
    <Box mt={20}>
      <SimpleGrid columns={2}>
        <Box>
          <Box w="100%" m="0 auto" maxW="400px" h="300px" bg="gray.50">
            <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
          </Box>
        </Box>
        <Box>
          <Text fontSize="5xl" fontWeight="bold" maxW="600px">
            We house you very quickly
          </Text>
          <Text mt={4} maxW="600px">
            Using state of the art technology, we are able to match groups to the perfect housing
            that they need based on the size of the home needed, the features they require from the
            home and their budget.
          </Text>
          <Text color="blue.600" mt={4} fontSize="sm">
            How we match users
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

function Testimonial() {
  return (
    <Box mt={32} w="100%" bg="gray.200" py={20}>
      <Text maxW="800px" fontSize="3xl" textAlign="center" m="0 auto">
        After using this product, I realized a great increase in the number of users that used our
        product. It has improved our load speed by 250%
      </Text>
      <Text fontSize="xl" color="blue.500" mt={4} textAlign="center">
        John Doe
      </Text>
      <Text fontSize="sm" textAlign="center">
        CEO at Belky
      </Text>
    </Box>
  )
}

function Footer() {
  return (
    <Box mt={20} mb={12}>
      <Text fontSize="4xl" mt={12} fontWeight="bold" textAlign="center">
        Homelify
      </Text>
      <Text
        fontSize="2xl"
        textAlign="center"
        maxW="800px"
        m="0 auto"
        borderBottom="1px #bbb solid"
        mt={4}
        pb={10}
      >
        We match home owners with tourists and help the tourists get the home they want
      </Text>
      
      <SimpleGrid columns={3} w="max-content" gap={20} m="0 auto" mt={6}>
        <Text>Privacy</Text>
        <Text>Pricing</Text>
        <Text>Login</Text>
      </SimpleGrid>
    </Box>
  )
}

// function Map() {
//   return (
   
//       <AspectRatio ratio={16 / 9}>
//         <iframe
//           src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
//           alt='demo'
//         />
//       </AspectRatio>
    
//   )
// }

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <TopHeading />
      <TopDestinations />
      {/* <Map /> */}
      <RightFeature />
      <Testimonial />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
