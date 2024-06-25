import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Taxi Booking App</Heading>
        <Text fontSize="lg">Book your ride with ease and comfort.</Text>
        <Button as={Link} to="/booking" colorScheme="teal" size="lg">Book a Taxi</Button>
        <Button as={Link} to="/taxis" colorScheme="teal" size="lg">Available Taxis</Button>
      </VStack>
    </Container>
  );
};

export default Index;