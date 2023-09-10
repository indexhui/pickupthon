import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const ScheduleList = props => {
  const { index, event } = props;
  const { t } = useTranslation();
  return (
    <Flex
      w="100%"
      wrap="wrap"
      bgColor={index % 2 === 0 ? '' : '#192629'}
      py="12px"
    >
      <Text
        px="20px"
        textStyle="p1"
        w={{ base: '100%', lg: '20%' }}
        color="white"
      >
        {event.time}
      </Text>
      <Text textStyle="p1" w={{ base: '100%', lg: '80%' }} color="white">
        {t(event.content)}
      </Text>
    </Flex>
  );
};

export default ScheduleList;
