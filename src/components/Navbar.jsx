import { Box, Flex, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">Taxi Booking</Link>
        </Box>
        <Flex alignItems="center">
          <Button as={RouterLink} to="/booking" colorScheme="teal" variant="ghost" color="white" mr={4}>Book a Taxi</Button>
          <Button as={RouterLink} to="/taxis" colorScheme="teal" variant="ghost" color="white">Available Taxis</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;