import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Schedule from 'sectoins/Schedule/Schedule';
import Title from 'components/Title';
import Speaker from './Speaker';

const SEMINAR_SCHEDULE = {
  day: 'DAY 1',
  events: [
    {
      time: '10:00-10:30',
      content: 'day1_01',
    },
    {
      time: '10:30-12:00',
      content: 'day1_02',
    },
  ],
};

const SectionSeminar = () => {
  const { t } = useTranslation();
  return (
    <Flex w="100%" py="40px" justify="center">
      <Flex
        w="80%"
        maxW="856px"
        align="center"
        justify="center"
        direction="column"
        border="1px solid blue"
      >
        <Title title={t('seminarTitle')} subTitle="October 27" />
        <Flex
          direction="column"
          w="100%"
          gap="20px"
          pt={{ base: '24px', lg: '60px' }}
        >
          <Text textStyle="p1">{t('seminarContent01')}</Text>
          <Text textStyle="p1">{t('seminarContent02')}</Text>
        </Flex>
        <Flex
          mt="60px"
          w="100%"
          border="1px solid white"
          rounded={{ base: '40px', lg: '80px' }}
          pt="40px"
          px="60px"
          pb="60px"
          bgColor="grey.800"
        >
          <Schedule content={SEMINAR_SCHEDULE} />
        </Flex>
        <Speaker />
      </Flex>
    </Flex>
  );
};

export default SectionSeminar;
