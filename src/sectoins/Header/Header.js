import { useState } from 'react';
import { Flex, Link, Text, Image } from '@chakra-ui/react';
import logo from 'assets/images/logo-p.svg';
import MenuList from './MenuList';
import LanguageSwitcher from './LanguageSwitcher';
import SideDrawer from './SideDrawer';

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      px="40px"
      w="100%"
      h="72px"
      bgColor="bg-dark"
      justify="space-between"
      align="center"
      zIndex="10"
    >
      <Image src={logo} alt="logo" />
      <Flex align="center" display={{ base: 'none', lg: 'flex' }}>
        <MenuList />
        <LanguageSwitcher />
      </Flex>
      <Flex align="center" display={{ base: 'flex', lg: 'none' }}>
        <SideDrawer />
      </Flex>
    </Flex>
  );
};

export default Header;
