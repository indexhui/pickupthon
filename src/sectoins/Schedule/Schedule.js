import { Flex, Text } from '@chakra-ui/react';
import ScheduleList from './ScheduleList';

const Schedule = props => {
  const { content } = props;
  return (
    <Flex w="100%" direction="column" align="center">
      <Text textStyle="h3" color="yellow.500">
        {content.day}
      </Text>
      <Flex w="100%" direction="column">
        <Flex w="100%" wrap="wrap" pb="12px" borderBottom="1px solid white">
          <Text textStyle="h6" px="20px" w={{ base: '100%', lg: '20%' }}>
            10/27 Fri.
          </Text>
          <Text
            display={{ base: 'none', lg: 'flex' }}
            textStyle="h6"
            w={{ base: '100%', lg: '80%' }}
          >
            Content
          </Text>
        </Flex>
        {content?.events.map((event, index) => (
          <ScheduleList key={index} index={index} event={event} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Schedule;
