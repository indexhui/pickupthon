import { Flex, Text } from '@chakra-ui/react';
import ScheduleList from './ScheduleList';

const Schedule = props => {
  const { content } = props;
  return (
    <Flex w="100%" direction="column" align="center" gap="12px">
      {content?.events.map((event, index) => (
        <ScheduleList key={index} index={index} event={event} />
      ))}
    </Flex>
  );
};

export default Schedule;
