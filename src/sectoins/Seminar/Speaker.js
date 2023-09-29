import { SimpleGrid } from '@chakra-ui/react';

import speaker01 from 'assets/images/speaker/speaker01.png';
import CardModal from 'components/cardModal/CardModal';

const SPEAKER_DATA = [
  {
    image: speaker01,
    name: 'speaker01',
    title: 'speaker01title',
    topic: 'speaker01topic',
    content: 'speaker01content',
    intro: 'speaker01intro',
  },
  {
    name: 'speaker02',
    image: speaker01,
    title: 'speaker02title',
    topic: 'speaker02topic',
    content: 'speaker02content',
    intro: 'speaker02intro',
  },
  {
    name: 'speaker03',
    image: speaker01,
    title: 'speaker03title',
    topic: 'speaker03topic',
    content: 'speaker03content',
    intro: 'speaker03intro',
  },
  {
    name: 'speaker04',
    image: speaker01,
    title: 'speaker04title',
    topic: 'speaker04topic',
    content: 'speaker04content',
    intro: 'speaker04intro',
  },
  {
    name: 'speaker05',
    image: speaker01,
    title: 'speaker05title',
    topic: 'speaker05topic',
    content: 'speaker05content',
    intro: 'speaker05intro',
  },
  {
    name: 'speaker06',
    image: speaker01,
    title: 'speaker06title',
    topic: 'speaker06topic',
    content: 'speaker06content',
    intro: 'speaker06intro',
  },
  {
    name: 'speaker07',
    image: speaker01,
    title: 'speaker07title',
    topic: 'speaker07topic',
    content: 'speaker07content',
    intro: 'speaker07intro',
  },
];

const Speaker = () => {
  return (
    <SimpleGrid
      w={{ base: '100%', lg: '90%' }}
      px="20px"
      spacing={10}
      columns={{ base: 1, lg: 2 }}
    >
      {SPEAKER_DATA.map((item, index) => (
        <CardModal key={index} {...item} />
      ))}
    </SimpleGrid>
  );
};

export default Speaker;
