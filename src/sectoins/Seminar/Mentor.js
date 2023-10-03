import { SimpleGrid } from '@chakra-ui/react';
import SmallCard from 'components/cardModal/SmallCard';
import mentor_01 from 'assets/images/mentor/mentor_01.png';
import mentor_02 from 'assets/images/mentor/mentor_02.png';
import mentor_03 from 'assets/images/mentor/mentor_03.png';

const MENTOR_DATA = [
  {
    image: mentor_01,
    name: 'mentor01',
    title: 'mentor01title',
    intro: 'mentor01intro',
    link: 'https://www.linkedin.com/in/nai-hsin-chen/',
  },
  {
    image: mentor_02,
    name: 'mentor02',
    title: 'mentor02title',
    intro: 'mentor02intro',
    link: 'https://www.linkedin.com/in/nitawu/',
  },
  {
    image: mentor_03,
    name: 'mentor03',
    title: 'mentor03title',
    intro: 'mentor03intro',
    link: 'https://www.linkedin.com/in/pacha-chen/',
  },
];
const Mentor = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5}>
      {MENTOR_DATA.map((item, index) => (
        <SmallCard key={index} {...item} isMentor />
      ))}
    </SimpleGrid>
  );
};

export default Mentor;
