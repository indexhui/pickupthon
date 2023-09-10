import { useTranslation } from 'react-i18next';

import { Flex, GridItem, Text } from '@chakra-ui/react';
const IntroCard = props => {
  const { t } = useTranslation();

  const { title, content } = props;
  return (
    <GridItem
      as={Flex}
      direction="column"
      border="1px solid white"
      rounded={{ base: '20px', lg: '40px' }}
      px="32px"
      py="24px"
      justify="center"
      align="center"
    >
      <Text color="yellow.500" textStyle="h3" py="16px">
        {t(title)}
      </Text>
      <Text flex="1" color="white" textStyle="p1">
        {t(content)}
      </Text>
    </GridItem>
  );
};

export default IntroCard;
