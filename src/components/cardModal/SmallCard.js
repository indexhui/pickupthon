import {
  Flex,
  Text,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { EarthIcon } from 'components/icons/EarthIcon';

const SmallCard = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { name, title, topic, content, intro, image } = props;
  const { t } = useTranslation();
  return (
    <>
      <Flex onClick={onOpen} bgColor="aquaGreen.500" h="328px" rounded="20px">
        <Flex
          rounded="20px"
          mx="8px"
          w="286px"
          h="100%"
          bgColor="orange.400"
          direction="column"
          align="center"
          justify="center"
          pb="8px"
        >
          <Image src={image} h="70%" w="80%" objectFit="cover" />
          <Flex
            bgColor="aquaGreen.500"
            w="80%"
            p="12px"
            direction="column"
            borderRadius="0 0 12px 12px"
          >
            <Text textStyle="h5" color="yellow.500">
              {t(name)}
            </Text>
            <Text textStyle="p2" color="white">
              {t(title)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
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
              w="60%"
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
            </Flex>
            <Flex w="40%" bgColor="orange.400" justify="center">
              <Image src={image} w="70%" objectFit="contain" />
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SmallCard;
