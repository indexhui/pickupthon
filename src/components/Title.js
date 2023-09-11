import { Flex, Text } from '@chakra-ui/react';

const Title = props => {
  const { title, subTitle } = props;
  return (
    <Flex direction="column" align="center">
      <Text textStyle="h2">{title}</Text>
      <Text textStyle="h5">{subTitle}</Text>
    </Flex>
  );
};
export default Title;
