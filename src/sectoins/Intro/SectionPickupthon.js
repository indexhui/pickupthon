import { Flex, Text, Highlight } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import IntroCardGroup from './IntroCardGroup';
import Hightlights from './Highlights';
import WhoShouldAttend from './WhoShouldAttend';

const SectionPickupthon = () => {
  const { t } = useTranslation();
  return (
    <Flex w="100%" align="center" justify="center" direction="column">
      <Flex w={{ base: '100%', lg: '85%' }} px="20px">
        <Flex
          w="100%"
          py={{ base: '48px', lg: '60px' }}
          pb={{ base: '48px', lg: '90px' }}
          borderRadius={{ base: '48px', lg: '80px' }}
          bg="var(--other-linear-2, linear-gradient(180deg, #204F55 0%, rgba(19, 24, 27, 0.60) 100%))"
          align="center"
          justify="center"
          direction="column"
          px={{ base: '40px', lg: '120px' }}
        >
          <Text color="yellow.500" textStyle="h2">
            {t('introTitle')}
          </Text>
          <Text color="cloud.500" textStyle="p1">
            <Highlight
              query={[
                'sustainability forums',
                'design workshops',
                'sustainable hackathons',
                '永續論壇',
                '設計工作坊',
                '永續黑客松',
              ]}
              color="cloud.500"
              textStyle="h2"
              styles={{ px: '1', py: '1', color: 'yellow.500' }}
            >
              {t('introContent01')}
            </Highlight>
          </Text>
          {/* <IntroCardGroup /> */}
        </Flex>
      </Flex>
      <Hightlights />
      <WhoShouldAttend />
    </Flex>
  );
};

export default SectionPickupthon;
