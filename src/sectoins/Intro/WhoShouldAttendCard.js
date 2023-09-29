import { Flex, Text, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const WhoShouldAttendCard = props => {
  const { title, content, image } = props;
  const { t } = useTranslation();
  return (
    <Flex direction={{ base: 'column', lg: 'row' }} align="center">
      <Image
        w={{ base: '200px', lg: 'unset' }}
        src={image}
        pb={{ base: '20px', lg: '0' }}
      />
      <Flex direction="column">
        <Text textStyle="h4" color="cloud.500">
          {t(title)}
        </Text>
        <Text textStyle="p1">{t(content)}</Text>
      </Flex>
    </Flex>
  );
};

export default WhoShouldAttendCard;
