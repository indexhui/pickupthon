import { useState } from 'react';

import { Link, Text, textDecoration } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const AnchorLink = props => {
  const { name, to, onClose } = props;
  const { t } = useTranslation();

  const [isActive, setIsActive] = useState(false);

  return (
    <Link
      borderBottom="2px"
      borderBottomColor={isActive ? 'orange.500' : 'transparent'}
      h="100%"
      _hover={{ textDecoration: 'none' }}
      display="flex"
      alignItems="center"
      offset={-20}
      spy={true}
      hashSpy={true}
      as={ReachLink}
      position="relative"
      smooth={true}
      color="white"
      fontSize={{ base: '18px', md: '16px' }}
      onSetActive={() => setIsActive(true)}
      onSetInactive={() => setIsActive(false)}
      onClick={onClose}
      to={to}
    >
      <Text color="white"> {t(name)}</Text>
    </Link>
  );
};

export default AnchorLink;
