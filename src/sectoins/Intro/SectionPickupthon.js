import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import IntroCardGroup from './IntroCardGroup';

const SectionPickupthon = () => {
  const { t } = useTranslation();
  return (
    <Flex w="100%" align="center" justify="center">
      <Flex w="1080px">
        <Flex
          w="100%"
          py={{ base: '48px', lg: '80px' }}
          borderRadius={{ base: '48px', lg: '80px' }}
          bg="var(--other-linear-2, linear-gradient(180deg, #204F55 0%, rgba(19, 24, 27, 0.60) 100%))"
          align="center"
          justify="center"
          direction="column"
          px="120px"
        >
          <Text color="cloud.500" textStyle="h2">
            {t('introTitle')}
          </Text>
          <Text color="cloud.500" textStyle="p1">
            {t('introContent01')}
          </Text>
          <IntroCardGroup />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionPickupthon;
