import { Flex, Text, Image } from '@chakra-ui/react';

import AnchorLink from './AnchorLink';

const LIST_DATA = [
  {
    name: 'Pickupthon',
    to: 'Hero',
  },
  {
    name: 'Seminar',
    to: 'Seminar',
  },
  {
    name: 'Workshops',
    to: 'Workshops',
  },
  {
    name: 'Hackathon',
    to: 'Hackathon',
  },

  {
    name: 'Register',
    to: 'Register',
  },
  {
    name: 'Supporters',
    to: 'Supporters',
  },
  {
    name: 'headerFaq',
    to: 'FAQ',
  },
];

const MenuList = props => {
  const { onClose } = props;
  return (
    <Flex h="100%" gap="1.5vw" direction={{ base: 'column', lg: 'row' }}>
      {LIST_DATA.map((item, index) => {
        return (
          <AnchorLink
            key={index}
            name={item.name}
            to={item.to}
            onClose={onClose}
          />
        );
      })}
    </Flex>
  );
};

export default MenuList;
