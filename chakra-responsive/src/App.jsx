import { Box, Flex, Heading, Text, Image, Stack } from "@chakra-ui/react";

function TestimonialCard({ title, description, name, role }) {
  return (
    <Box bg="white" p={5} borderRadius="lg" boxShadow="md" textAlign="center">
      <Heading as="h3" size="md" mb={2}>{title}</Heading>
      <Text mb={3} color="gray.600">{description}</Text>
      <Image
        borderRadius="full"
        boxSize="50px"
        src="https://via.placeholder.com/50"
        alt="client"
        mx="auto"
        mb={2}
      />
      <Text fontWeight="bold">{name}</Text>
      <Text fontSize="sm" color="gray.500">{role}</Text>
    </Box>
  );
}

function App() {
  const testimonials = [
    {
      title: "Efficient Collaborating",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Jane Cooper",
      role: "CEO at ABC Corporation"
    },
    {
      title: "Intuitive Design",
      description: "Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      name: "Jane Cooper",
      role: "CEO at ABC Corporation"
    },
    {
      title: "Mindblowing Service",
      description: "Aliquam eget finibus ante, non facilisis lectus.",
      name: "Jane Cooper",
      role: "CEO at ABC Corporation"
    }
  ];

  return (
    <Box bg="gray.100" py={10} px={5}>
      <Heading textAlign="center" mb={10}>Our Clients Speak</Heading>

      
      <Flex
        direction={{ base: "column", md: "row" }} // column for mobile, row for desktop
        justify="center"
        align="center"
        gap={6}
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </Flex>
    </Box>
  );
}

export default App;
