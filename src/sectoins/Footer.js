import { Flex, Text, Icon, HStack, Link } from '@chakra-ui/react';
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      align="center"
      justify="center"
      w="100%"
      bgColor="gray.800"
      as="footer"
      direction="column"
      py={{ base: '40px', lg: '80px' }}
    >
      <HStack spacing="20px" py={{ base: '20px', lg: '40px' }}>
        <Flex
          as={Link}
          isExternal
          href="https://www.facebook.com/ubctaiwan/"
          w="50px"
          h="50px"
          rounded="full"
          bgColor="gray.100"
          color="gray.900"
          align="center"
          justify="center"
          cursor="pointer"
        >
          <Icon w={5} h={5} as={FaFacebookF} />
        </Flex>
        <Flex
          as={Link}
          isExternal
          href="https://www.linkedin.com/company/ux-book-club/"
          w="50px"
          h="50px"
          rounded="full"
          bgColor="gray.100"
          color="gray.900"
          align="center"
          justify="center"
          cursor="pointer"
        >
          <Icon w={5} h={5} as={FaLinkedinIn} />
        </Flex>
        <Flex
          w="50px"
          h="50px"
          rounded="full"
          bgColor="gray.100"
          color="gray.900"
          align="center"
          justify="center"
          cursor="pointer"
        >
          <Icon w={5} h={5} as={FaEnvelope} />
        </Flex>
      </HStack>
      <Text color="gray.200">Copyright © Pickup Design 2023</Text>
    </Flex>
  );
};

export default Footer;
