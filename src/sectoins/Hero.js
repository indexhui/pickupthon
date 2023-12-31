import { useTranslation } from 'react-i18next';

import { Flex, Text, Image, Button, Link } from '@chakra-ui/react';
import banner from 'assets/images/banner.svg';
import pickupthon2023 from 'assets/images/pickupthon2023.svg';
import logoEN from 'assets/images/logo_en.svg';
import logoZH from 'assets/images/logo_zh.svg';
import logoPickup from 'assets/images/logo_pickup.svg';

const CTA = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  // const isZhTW = currentLanguage === 'zh-TW';

  return (
    <Flex direction="column" gap="5px" pb="5%" align="flex-start">
      <Text color="black" px="10px" bgColor="yellow.500">
        2023.10.27-29 (GMT+8)
      </Text>
      <Flex w={{ base: '300px', lg: '700px' }} py="10px" position="relative">
        <Image w={{ base: '300px', lg: '700px' }} src={logoEN} alt="logo" />
      </Flex>
      <Text pb={{ base: '12px', lg: '16px' }} textStyle="h5" color="cloud.500">
        {t('heroSubtitle')}
      </Text>
      <Button
        as={Link}
        href="https://www.accupass.com/event/2308241411051114416924"
        isExternal
        colorScheme="orange"
        bgColor="orange.500"
        color="white"
        px="32px"
      >
        <Text textStyle="h5">{t('register')}</Text>
      </Button>
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
        display={{ base: 'none', lg: 'block' }}
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
