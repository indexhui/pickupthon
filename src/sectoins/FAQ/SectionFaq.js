import {
  Flex,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const FAQ_DATA = [
  {
    question: 'faqQues01',
    answer: 'faqAns01',
  },
  {
    question: 'faqQues02',
    answer: 'faqAns02',
  },
  {
    question: 'faqQues03',
    answer: 'faqAns03',
  },
];

const SectoinFaq = () => {
  const { t } = useTranslation();
  return (
    <Flex
      py={{ base: '40px', lg: '80px' }}
      w="100%"
      align="center"
      justify="center"
      direction="column"
      px="12px"
    >
      <Text py={{ base: '20px', lg: '40px' }} textStyle="h2" color="cloud.500">
        {t('faq')}
      </Text>
      <Flex w={{ base: '100%', lg: '80%' }}>
        <Accordion
          allowToggle
          w="100%"
          display="flex"
          flexDirection="column"
          color="white"
          gap="20px"
          rounded={{ base: '12px', lg: '20px' }}
        >
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={index}
              border="1px solid"
              borderColor="aquaGreen.500"
              bgColor="grey.800"
              rounded={{ base: '12px', lg: '20px' }}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      border="0"
                      color="orange.500"
                      _expanded={{ color: 'yellow.500' }}
                    >
                      <Text
                        py={{ base: '12px', lg: '8px' }}
                        flex="1"
                        fontStyle="h6"
                        textAlign="left"
                        color={isExpanded ? 'yellow.500' : 'white'}
                      >
                        Q{index + 1}. {t(item.question)}
                      </Text>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel color="white" pb={4}>
                    <Text textStyle="p1">{t(item.answer)}</Text>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default SectoinFaq;
