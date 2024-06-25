import { Container, VStack, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    pickupLocation: "",
    dropoffLocation: "",
    time: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data: ", formData);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h2" size="xl">Book a Taxi</Heading>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl id="pickupLocation" isRequired>
          <FormLabel>Pickup Location</FormLabel>
          <Input name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} />
        </FormControl>
        <FormControl id="dropoffLocation" isRequired>
          <FormLabel>Dropoff Location</FormLabel>
          <Input name="dropoffLocation" value={formData.dropoffLocation} onChange={handleChange} />
        </FormControl>
        <FormControl id="time" isRequired>
          <FormLabel>Pickup Time</FormLabel>
          <Input type="datetime-local" name="time" value={formData.time} onChange={handleChange} />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Submit</Button>
      </VStack>
    </Container>
  );
};

export default Booking;