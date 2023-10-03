import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Schedule from 'sectoins/Schedule/Schedule';
import Speaker from './Speaker';
import Mentor from './Mentor';
import waveTop from 'assets/images/waveTop.svg';
import { Element } from 'react-scroll';

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
      isYellow: true,
    },
    {
      time: '12:00-13:00',
      content: 'day1_03',
    },
    {
      time: '13:00-14:30',
      content: 'day1_04',
      isYellow: true,
    },
    {
      time: '14:30-16:30',
      content: 'day1_05',
      isYellow: true,
    },
    {
      time: '16:30-17:30',
      content: 'day1_06',
      isYellow: true,
    },
  ],
};

const WORKSHOPS_SCHEDULE = {
  day: 'DAY 2',
  events: [
    {
      time: '9:00-9:30',
      content: 'day2_01',
    },
    {
      time: '9:30 - 9:50',
      content: 'day2_02',
    },
    {
      time: '9:50 - 10:25',
      content: 'day2_03',
    },
    {
      time: '10:25 -11:00',
      content: 'day2_04',
      isYellow: true,
    },
    {
      time: '11:00 - 12:00',
      content: 'day2_05',
    },
    {
      time: '12:00 - 14:00',
      content: 'day2_06',
      isYellow: true,
    },
    {
      time: '14:00 - 14:15',
      content: 'day2_07',
    },
    {
      time: '14:15 - 16:15',
      content: 'day2_08',
      isYellow: true,
    },
    {
      time: '16:15 - 16:30',
      content: 'day2_09',
    },
    {
      time: '16:30 - 17:30',
      content: 'day2_10',
      isYellow: true,
    },
    {
      time: '18:00 - 22:00',
      content: 'day2_11',
    },
  ],
};

const Day1 = () => {
  const { t } = useTranslation();
  return (
    <Flex w="100%" align="center" justify="center" direction="column">
      <Flex
        zIndex="1"
        mt="-60px"
        w="80%"
        maxW="856px"
        align="center"
        justify="center"
        direction="column"
      >
        <Text textStyle="h2" color="yellow.500">
          DAY 1 - {t('seminarTitle')}
        </Text>
        <Text textStyle="h5" color="cloud.500">
          {t('seminarContent')}
        </Text>
        <Text
          textStyle="h4"
          color="black"
          bgColor="yellow.500"
          mt={{ base: '20px', lg: '60px' }}
        >
          {t('seminarDate')}
        </Text>
        <Flex
          w="100%"
          pt={{ base: '24px', lg: '40px' }}
          pb={{ base: '32px', lg: '60px' }}
          gap="12px"
          direction="column"
        >
          <Schedule content={SEMINAR_SCHEDULE} />
          <Text textStyle="p2" color="white">
            {t('seminarNote')}
          </Text>
        </Flex>
      </Flex>
      <Speaker />
    </Flex>
  );
};

const Day2 = () => {
  const { t } = useTranslation();
  return (
    <Flex pt="60px" w="100%" align="center" justify="center" direction="column">
      <Flex
        zIndex="1"
        w={{ base: '100%', lg: '80%' }}
        maxW="856px"
        px="20px"
        align="center"
        justify="center"
        direction="column"
      >
        <Text textStyle="h2" color="yellow.500">
          DAY 2 - {t('workshops')}
        </Text>
        <Text textStyle="h5" color="cloud.500" mt="20px">
          {t('workshopsContent')}
        </Text>
        <Text textStyle="h4" color="black" bgColor="yellow.500" mt="20px">
          {t('workshopsDate')}
        </Text>
        <Flex w="100%" pt="40px" pb="60px" gap="12px">
          <Schedule content={WORKSHOPS_SCHEDULE} />
        </Flex>
      </Flex>
      <Mentor />
    </Flex>
  );
};

const SectionSeminar = () => {
  return (
    <Flex w="100%" justify="center" align="center" direction="column">
      <Flex
        w="100%"
        h={{ base: '120px', lg: '240px' }}
        bg="linear-gradient(90deg, rgba(126, 30, 0, 0.00) 3.98%, rgba(234, 155, 115, 0.30) 27.31%, rgba(246, 118, 55, 0.30) 49.87%, rgba(255, 92, 12, 0.60) 93.14%), linear-gradient(90deg, rgba(50, 50, 50, 0.15) 13.82%, rgba(255, 255, 255, 0.15) 92%);"
        clipPath="polygon( 100% 89.235%,95.156% 71.511%,95.156% 71.511%,94.042% 67.757%,92.878% 64.452%,91.669% 61.603%,90.42% 59.218%,89.139% 57.304%,87.831% 55.869%,86.501% 54.921%,85.156% 54.467%,83.803% 54.516%,82.445% 55.074%,71.317% 61.76%,71.317% 61.76%,70.329% 62.217%,69.341% 62.403%,68.355% 62.32%,67.373% 61.97%,66.397% 61.355%,65.43% 60.476%,64.475% 59.336%,63.533% 57.936%,62.607% 56.277%,61.699% 54.363%,49.793% 27.286%,49.793% 27.286%,48.878% 25.358%,47.945% 23.69%,46.995% 22.284%,46.032% 21.142%,45.058% 20.266%,44.074% 19.657%,43.084% 19.318%,42.091% 19.25%,41.095% 19.455%,40.101% 19.935%,21.657% 31.409%,21.657% 31.409%,20.656% 31.798%,19.661% 31.729%,18.678% 31.21%,17.715% 30.254%,16.776% 28.871%,15.868% 27.072%,14.998% 24.867%,14.173% 22.269%,13.397% 19.287%,12.678% 15.932%,12.678% 15.932%,11.574% 10.991%,10.386% 6.996%,9.131% 3.923%,7.828% 1.749%,6.494% 0.45%,5.148% 0.001%,3.808% 0.378%,2.491% 1.558%,1.216% 3.516%,0% 6.229%,0% 100%,100% 100%,100% 89.235% )"
      ></Flex>
      <Flex
        w="100%"
        align="center"
        justify="center"
        bg="linear-gradient(90deg, rgba(126, 30, 0, 0.00) 3.98%, rgba(234, 155, 115, 0.30) 27.31%, rgba(246, 118, 55, 0.30) 49.87%, rgba(255, 92, 12, 0.60) 93.14%), linear-gradient(90deg, rgba(50, 50, 50, 0.15) 13.82%, rgba(255, 255, 255, 0.15) 92%);"
        direction="column"
      >
        <Day1 />
        <Element name="Workshops" id="Workshops">
          <Day2 />
        </Element>
      </Flex>
    </Flex>
  );
};

export default SectionSeminar;
