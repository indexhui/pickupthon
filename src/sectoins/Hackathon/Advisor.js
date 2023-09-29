import { Flex, SimpleGrid } from '@chakra-ui/react';
import speaker01 from 'assets/images/speaker/speaker01.png';

import SmallCard from 'components/cardModal/SmallCard';

const ASVISOR_DATA = [
  {
    image: speaker01,
    name: 'advisor01',
    title: 'advisor01title',
    intro: 'advisor01intro',
  },
  {
    image: speaker01,
    name: 'advisor02',
    title: 'advisor02title',
    intro: 'advisor02intro',
  },
  {
    image: speaker01,
    name: 'advisor03',
    title: 'advisor03title',
    intro: 'advisor03intro',
  },
  {
    image: speaker01,
    name: 'advisor04',
    title: 'advisor04title',
    intro: 'advisor04intro',
  },
  {
    image: speaker01,
    name: 'advisor05',
    title: 'advisor05title',
    intro: 'advisor05intro',
  },
  {
    image: speaker01,
    name: 'advisor06',
    title: 'advisor06title',
    intro: 'advisor06intro',
  },
  {
    image: speaker01,
    name: 'advisor07',
    title: 'advisor07title',
    intro: 'advisor07intro',
  },
  {
    image: speaker01,
    name: 'advisor08',
    title: 'advisor08title',
    intro: 'advisor08intro',
  },
  {
    image: speaker01,
    name: 'advisor09',
    title: 'advisor09title',
    intro: 'advisor09intro',
  },
];

const Advisor = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
      {ASVISOR_DATA.map((item, index) => (
        <SmallCard key={index} {...item} />
      ))}
    </SimpleGrid>
  );
};

export default Advisor;
