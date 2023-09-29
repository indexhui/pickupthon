import { Flex, Text, Highlight } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import HighlightCard from './HighlighCard';

const HIGHLIGHT_DATA = [
  {
    title: 'introSubtitle2_1',
    content: 'introContent2_1',
  },
  {
    title: 'introSubtitle2_2',
    content: 'introContent2_2',
  },
  {
    title: 'introSubtitle2_3',
    content: 'introContent2_3',
  },
  {
    title: 'introSubtitle2_4',
    content: 'introContent2_4',
  },
  {
    title: 'introSubtitle2_5',
    content: 'introContent2_5',
  },
  {
    title: 'introSubtitle2_6',
    content: 'introContent2_6',
  },
  {
    title: 'introSubtitle2_7',
    content: 'introContent2_7',
  },
  {
    title: 'introSubtitle2_8',
    content: 'introContent2_8',
  },
  {
    title: 'introSubtitle2_9',
    content: 'introContent2_9',
  },
];

const Hightlights = () => {
  const { t } = useTranslation();
  return (
    <Flex
      w={{ base: '100%', lg: '90%' }}
      position="relative"
      direction={{ base: 'column', lg: 'row' }}
      align="flex-start"
      px="20px"
    >
      <Flex
        position={{ base: 'unset', lg: 'sticky' }}
        top={{ base: 'unset', lg: '40px' }}
        w={{ base: '100%', lg: '400px' }}
        direction="column"
        py={{ base: '40px', lg: 'unset' }}
      >
        <Text
          color="yellow.500"
          textStyle="h3"
          textAlign={{ base: 'center', lg: 'left' }}
        >
          {t('introTitle2')}
        </Text>
        <Text
          color="white"
          textStyle="p1"
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <Highlight
            query={[
              ' allowing participants to understand ',
              'problems and create solutions',
              'with social innovation and ',
              'sustainability in mind',
              '讓參與者了解問題並創造具有社會創新和永續概念的解決方案',
            ]}
            color="cloud.500"
            textStyle="h2"
            styles={{ px: '1', py: '1', color: 'yellow.500' }}
          >
            {t('introContent2')}
          </Highlight>
        </Text>
      </Flex>
      <Flex flex="1" direction="column" gap="32px">
        {HIGHLIGHT_DATA.map((item, index) => (
          <HighlightCard
            order={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Hightlights;
