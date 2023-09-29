import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const ScheduleList = props => {
  const { event } = props;
  const { t } = useTranslation();
  return (
    <Flex
      w="100%"
      wrap="wrap"
      bgColor="grey.800"
      py="12px"
      border="1px solid"
      borderColor="aquaGreen.500"
      rounded="16px"
    >
      <Text
        px="20px"
        textStyle="p1"
        w={{ base: '100%', lg: '22%' }}
        color="white"
        fontWeight="bold"
      >
        {event.time}
      </Text>
      <Text
        pl={{ base: '20px', lg: '0' }}
        textStyle="p1"
        w={{ base: '100%', lg: '78%' }}
        color={event.isYellow ? 'yellow.500' : 'white'}
      >
        {t(event.content)}
      </Text>
    </Flex>
  );
};

export default ScheduleList;
