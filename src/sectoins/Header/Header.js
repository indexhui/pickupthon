import { useState } from 'react';
import { Flex, Link, Text, Image } from '@chakra-ui/react';
import logo from 'assets/images/logo-p.svg';
import MenuList from './MenuList';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <Flex
      px="40px"
      w="100%"
      h="72px"
      bgColor="bg-dark"
      justify="space-between"
      align="center"
    >
      <Image src={logo} alt="logo" />
      <Flex>
        <MenuList />
        <LanguageSwitcher />
      </Flex>
    </Flex>
  );
};

export default Header;
