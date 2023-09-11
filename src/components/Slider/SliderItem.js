import { Flex, Text } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

const SliderModal = props => {
  const { isOpen, onClose, data } = props;

  return <Modal></Modal>;
};

const SliderItem = props => {
  const { data } = props;
  return (
    <Flex bgColor="orange.500">
      <Text>SliderItem</Text>
      <SliderModal data={data} />
    </Flex>
  );
};
export default SliderItem;
