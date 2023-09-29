import { SimpleGrid } from '@chakra-ui/react';
import speaker01 from 'assets/images/speaker/speaker01.png';
import SmallCard from 'components/cardModal/SmallCard';

const MENTOR_DATA = [
  {
    image: speaker01,
    name: 'speaker01',
    title: 'speaker01title',
    topic: 'speaker01topic',
    content: 'speaker01content',
    intro: 'speaker01intro',
  },
  {
    image: speaker01,
    name: 'speaker01',
    title: 'speaker01title',
    topic: 'speaker01topic',
    content: 'speaker01content',
    intro: 'speaker01intro',
  },
  {
    image: speaker01,
    name: 'speaker01',
    title: 'speaker01title',
    topic: 'speaker01topic',
    content: 'speaker01content',
    intro: 'speaker01intro',
  },
];
const Mentor = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={4}>
      {MENTOR_DATA.map((item, index) => (
        <SmallCard key={index} {...item} />
      ))}
    </SimpleGrid>
  );
};

export default Mentor;
