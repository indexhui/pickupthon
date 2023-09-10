import { useTranslation } from 'react-i18next';

import { Flex, Text, Image, Button } from '@chakra-ui/react';
import banner from 'assets/images/banner.svg';
import pickupthon2023 from 'assets/images/pickupthon2023.svg';
import logoEN from 'assets/images/logo_en.svg';
import logoZH from 'assets/images/logo_zh.svg';
import logoPickup from 'assets/images/logo_pickup.svg';

const CTA = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isZhTW = currentLanguage === 'zh-TW';

  return (
    <Flex direction="column" gap="5px" pb="5%">
      <Text color="red.500">OCT.27-29</Text>
      <Flex w="400px" h="50px" position="relative">
        <Image
          opacity={isZhTW ? '0' : '1'}
          w="400px"
          left="0"
          position="absolute"
          src={logoEN}
          alt="logo"
        />
        <Image
          opacity={isZhTW ? '1' : '0'}
          w="400px"
          left="0"
          position="absolute"
          src={logoZH}
          alt="logo"
        />
      </Flex>
      <Button w="200px">報名</Button>
    </Flex>
  );
};

const Hero = () => {
  return (
    <Flex
      w="100%"
      h="80vh"
      bgImage={banner}
      bgPosition="center bottom"
      bgSize="cover"
      bgRepeat="no-repeat"
      position="relative"
      align="flex-end"
      px="10%"
    >
      <Image
        position="absolute"
        top="5%"
        left="10%"
        src={pickupthon2023}
        alt="pickupthon2023"
      />
      <Image
        position="absolute"
        bottom="10%"
        right="10%"
        src={logoPickup}
        alt="logoPickup"
      />
      <CTA />
    </Flex>
  );
};

export default Hero;
