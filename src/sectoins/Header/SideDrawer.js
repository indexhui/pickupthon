import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Button,
} from '@chakra-ui/react';

import MenuList from './MenuList';
import LanguageSwitcher from './LanguageSwitcher';

import { MenuIcon } from 'components/icons';

const SideDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MenuIcon onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="black" color="white">
          <DrawerCloseButton />

          <DrawerBody>
            <Flex py="30px" h="100%" align="center">
              <Flex direction="column" gap="10px" align="flex-start">
                <MenuList onClose={onClose} />
                <LanguageSwitcher onClose={onClose} />
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
