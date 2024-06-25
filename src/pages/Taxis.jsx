import { Container, VStack, Heading, Box, Text } from "@chakra-ui/react";

const taxis = [
  { id: 1, driver: "John Doe", carModel: "Toyota Prius", licensePlate: "XYZ 1234" },
  { id: 2, driver: "Jane Smith", carModel: "Honda Accord", licensePlate: "ABC 5678" },
  { id: 3, driver: "Mike Johnson", carModel: "Tesla Model 3", licensePlate: "TES 9012" }
];

const Taxis = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h2" size="xl">Available Taxis</Heading>
        {taxis.map(taxi => (
          <Box key={taxi.id} p={5} shadow="md" borderWidth="1px" width="100%">
            <Text fontSize="lg"><strong>Driver:</strong> {taxi.driver}</Text>
            <Text fontSize="lg"><strong>Car Model:</strong> {taxi.carModel}</Text>
            <Text fontSize="lg"><strong>License Plate:</strong> {taxi.licensePlate}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Taxis;