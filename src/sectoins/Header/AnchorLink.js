import { useState } from 'react';

import { Link, Text } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const AnchorLink = props => {
  const { name, to } = props;
  const { t } = useTranslation();

  const [isActive, setIsActive] = useState(true);

  return (
    <Link
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
      to={to}
    >
      <Text color="white"> {t(name)}</Text>
    </Link>
  );
};

export default AnchorLink;
