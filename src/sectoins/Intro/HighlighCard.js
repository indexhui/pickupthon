import { Flex, Text, Highlight } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { SquareIcon, DiamondIcon } from 'components/icons';

const HighlightCard = props => {
  const { t } = useTranslation();
  const { order, title, content } = props;
  // order is odd or even
  const isOdd = order % 2 === 1;
  // is Odd icon square, is even icon diamond

  return (
    <Flex direction="column" gap="12px">
      <Flex align="center">
        {isOdd ? <DiamondIcon /> : <SquareIcon />}
        <Text pl="12px" color="cloud.500" textStyle="h4">
          {t(title)}
        </Text>
      </Flex>
      <Flex>
        <Flex w="32px" align="center">
          <Flex
            rounded="full"
            mx="10px"
            w="20px"
            h="100%"
            bg="var(--other-linear-2, linear-gradient(180deg, #204F55 0%, rgba(19, 24, 27, 0.60) 100%))"
          ></Flex>
        </Flex>
        <Text pl="12px" textStyle="p1">
          {t(content)}
        </Text>
      </Flex>
    </Flex>
  );
};

export default HighlightCard;
