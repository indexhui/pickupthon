import { Flex, Text, Highlight } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import person01 from 'assets/images/person01.svg';
import person02 from 'assets/images/person02.svg';
import WhoShouldAttendCard from './WhoShouldAttendCard';

const WHO_SHOULD_ATTEND_DATA = [
  {
    Image: person01,
    title: 'introSubtitle3_1',
    content: 'introContent3_1',
  },
  {
    Image: person02,
    title: 'introSubtitle3_2',
    content: 'introContent3_2',
  },
];
const WhoShouldAttend = () => {
  const { t } = useTranslation();

  return (
    <Flex
      py={{ base: '48px', lg: '80px' }}
      w={{ base: '100%', lg: '90%' }}
      px="20px"
      position="relative"
      direction={{ base: 'column', lg: 'row' }}
      align="flex-start"
    >
      <Flex
        position={{ base: 'relative', lg: 'sticky' }}
        top={{ base: 'unset', lg: '100px' }}
        w={{ base: '100%', lg: '400px' }}
        direction="column"
        py={{ base: '40px', lg: 'unset' }}
      >
        <Text
          color="yellow.500"
          textStyle="h3"
          textAlign={{ base: 'center', lg: 'left' }}
        >
          {t('introTitle3')}
        </Text>
      </Flex>
      <Flex
        direction="column"
        pl={{ base: '0', lg: '60px' }}
        gap={{ base: '20px', lg: '60px' }}
      >
        {WHO_SHOULD_ATTEND_DATA.map((item, index) => (
          <WhoShouldAttendCard
            key={index}
            title={item.title}
            content={item.content}
            image={item.Image}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default WhoShouldAttend;
