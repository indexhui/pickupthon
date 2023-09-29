import {
  Flex,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Text,
  Image,
  Box,
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';
import { EarthIcon } from 'components/icons/EarthIcon';

const Modaler = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name, title, topic, content, image, intro } = props;
  const { t } = useTranslation();
  return (
    <>
      <Button bgColor="orange.400" color="white" onClick={onOpen}>
        More
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl" maxW="80%">
        <ModalOverlay />
        <ModalContent bgColor="unset" maxW="80%">
          <Flex
            w="100%"
            h="100%"
            bgColor="aquaGreen.500"
            color="white"
            rounded="40px"
            justify="center"
            align="stretch"
            overflow="hidden"
          >
            <Flex
              direction="column"
              w={{ base: '100%', lg: '60%' }}
              p="30px"
              maxH="500px"
              overflowY="scroll"
              align="flex-start"
            >
              <Text textStyle="h3" color="yellow.500">
                {t(name)}
              </Text>
              <Text textStyle="p1" color="white">
                {t(title)}
              </Text>

              <EarthIcon />
              <Text my="12px" color="white" textStyle="p2">
                {t(intro)}
              </Text>
              <Box
                w="100%"
                borderTop="1px"
                my="24px"
                borderColor="yellow.500"
              />
              <Text
                textStyle="h5"
                my="12px"
                bgColor="yellow.500"
                color="aquaGreen.600"
              >
                {t(topic)}
              </Text>
              <Text textStyle="p2" color="white">
                {t(content)}
              </Text>
            </Flex>
            <Flex
              w="40%"
              bgColor="orange.400"
              justify="center"
              display={{ base: 'none', lg: 'flex' }}
            >
              <Image src={image} w="70%" objectFit="contain" />
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modaler;
