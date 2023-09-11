import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Schedule from 'sectoins/Schedule/Schedule';
import Title from 'components/Title';

const HACKATHON_SCHEDULE = [
  {
    day: 'DAY 2',
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
  },
  {
    day: 'DAY 3',
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
  },
];

const SectionHackathon = () => {
  const { t } = useTranslation();

  return (
    <Flex w="100%" justify="center" pt="40px">
      <Flex
        w="80%"
        maxW="856px"
        align="center"
        justify="center"
        direction="column"
      >
        <Title title={t('Hackathon')} subTitle="October 28-29" />
        {HACKATHON_SCHEDULE.map((schedule, index) => (
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
            <Schedule content={schedule} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default SectionHackathon;
