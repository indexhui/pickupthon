import { Flex, Text, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import Modaler from './Modaler';
import tag01 from 'assets/images/tag01.svg';

const CardModal = props => {
  const { name, title, topic, content, intro, image } = props;
  const { t } = useTranslation();
  return (
    <Flex
      bgColor="aquaGreen.500"
      w="100%"
      minH={{ base: 'unset', lg: '328px' }}
      rounded="20px"
      direction={{ base: 'column', lg: 'row' }}
      align={{ base: 'center', lg: 'stretch' }}
    >
      <Flex
        rounded="20px"
        mx="8px"
        w="286px"
        h="100%"
        bgColor="orange.400"
        direction="column"
        align="center"
        justify="center"
        pb="8px"
        position="relative"
      >
        <Flex
          bgImage={tag01}
          bgSize="contain"
          bgRepeat="no-repeat"
          w="100px"
          h="60px"
          position="absolute"
          top="-20px"
          left="-20px"
          justify="center"
          align="center"
        >
          <Text textStyle="h5" color="aquaGreen.500">
            {t('tag01')}
          </Text>
        </Flex>
        <Image src={image} h="70%" w="80%" objectFit="cover" />
        <Flex
          bgColor="aquaGreen.500"
          w="80%"
          p="12px"
          direction="column"
          borderRadius="0 0 12px 12px"
        >
          <Text textStyle="h5" color="yellow.500">
            {t(name)}
          </Text>
          <Text textStyle="p2" color="white">
            {t(title)}
          </Text>
        </Flex>
      </Flex>
      <Flex flex="1" direction="column" p="24px" align="flex-start">
        <Text
          px="2px"
          textStyle="h5"
          bgColor="yellow.500"
          color="aquaGreen.600"
        >
          {t(topic)}
        </Text>
        <Text my="12px" noOfLines={6} color="white" textStyle="p2">
          {t(content)}
        </Text>

        <Flex flex="1" align="flex-end" w="100%" justify="center">
          <Modaler {...props} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardModal;
