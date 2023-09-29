import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isZhTW = currentLanguage === 'zh-TW';
  const toggleLanguageMode = () => {
    if (isZhTW) {
      i18n.changeLanguage('en');
      localStorage.setItem('language', 'en');
    } else {
      i18n.changeLanguage('zh-TW');
      localStorage.setItem('language', 'zh-TW');
    }
  };
  return (
    <Flex
      ml="10px"
      onClick={() => toggleLanguageMode()}
      border="1px solid white"
      p="2px 12px"
      rounded="full"
    >
      <Text cursor="pointer" color="white">
        {isZhTW ? 'EN' : '中文'}
      </Text>
    </Flex>
  );
};
export default LanguageSwitcher;
