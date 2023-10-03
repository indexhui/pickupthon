import { Flex, Text, Button, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const REGISTER = [
  {
    step: 'registerStep02',
    content: 'registerStep02content',
  },
  {
    step: 'registerStep03',
    content: 'registerStep03content',
  },
  {
    step: 'registerStep04',
    content: 'registerStep04content',
  },
];

const SectionRegister = () => {
  const { t } = useTranslation();

  return (
    <Flex
      w="100%"
      px="20px"
      py={{ base: '40px', lg: '60px' }}
      direction="column"
      align="center"
    >
      <Flex
        w={{ base: '100%', lg: '80%' }}
        maxW="1080px"
        direction="column"
        bgColor="yellow.500"
        rounded={{ base: '40px', lg: '80px' }}
        overflow="hidden"
        align="center"
        pb="40px"
      >
        <Flex w="100%" justify="center" bgColor="orange.400" py="20px">
          <Text textAlign="center" textStyle="h2" color="white">
            {t('registerTitle')}
          </Text>
        </Flex>
        <Flex direction="column" align="flex-start" p="40px" gap="20px">
          <Flex direction="column" w="100%">
            <Flex>
              <Text textStyle="h4" color="aquaGreen.500">
                {t('registerStep01')}
              </Text>
            </Flex>
            <Flex direction="column">
              <Text textStyle="h5" color="aquaGreen.500">
                {t('eventDate')}
              </Text>
              <Text textStyle="h5" color="aquaGreen.500">
                {t('eventPlace')}
              </Text>
              <Text textStyle="h5" color="aquaGreen.500">
                {t('eventLocation')}
              </Text>
            </Flex>
          </Flex>
          {REGISTER.map((item, index) => (
            <Flex direction="column">
              <Text textStyle="h4" color="aquaGreen.500">
                {t(item.step)}
              </Text>
              <Text textStyle="b1" color="aquaGreen.500">
                {t(item.content)}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Button
          as={Link}
          href="https://www.accupass.com/event/2308241411051114416924"
          isExternal
          w="120px"
          colorScheme="orange"
          bgColor="orange.500"
          color="white"
          py="20px"
        >
          <Text textStyle="h5" color="white">
            {t('register')}
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default SectionRegister;
