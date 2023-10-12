import { SimpleGrid } from '@chakra-ui/react';

import speaker01 from 'assets/images/speaker/speaker01.png';
import speaker_02 from 'assets/images/speaker/speaker_02.png';
import speaker_03 from 'assets/images/speaker/speaker_03.png';
import speaker_04 from 'assets/images/speaker/speaker_04.png';
import speaker_05 from 'assets/images/speaker/speaker_05.png';
import speaker_06 from 'assets/images/speaker/speaker_06.png';
import speaker_07 from 'assets/images/speaker/speaker_07.png';

import CardModal from 'components/cardModal/CardModal';

const SPEAKER_DATA = [
  {
    name: 'speaker01',
    image: speaker01,
    title: 'speaker01title',
    topic: 'speaker01topic',
    content: 'speaker01content',
    intro: 'speaker01intro',
    link: 'https://www.linkedin.com/in/tzuchaoc',
  },
  {
    name: 'speaker02',
    image: speaker_02,
    title: 'speaker02title',
    topic: 'speaker02topic',
    content: 'speaker02content',
    intro: 'speaker02intro',
    link: 'https://www.facebook.com/ianjang.ux.sd',
  },
  {
    name: 'speaker03',
    image: speaker_03,
    title: 'speaker03title',
    topic: 'speaker03topic',
    content: 'speaker03content',
    intro: 'speaker03intro',
    link: 'https://www.linkedin.com/in/aaron-chuang-79512479',
  },
  {
    name: 'speaker04',
    image: speaker_04,
    title: 'speaker04title',
    topic: 'speaker04topic',
    content: 'speaker04content',
    intro: 'speaker04intro',
    link: 'https://www.linkedin.com/in/yenmin-alvin-huang/',
  },
  {
    name: 'speaker05',
    image: speaker_05,
    title: 'speaker05title',
    topic: 'speaker05topic',
    content: 'speaker05content',
    intro: 'speaker05intro',
    link: 'https://www.facebook.com/christang0920852/',
  },
  {
    name: 'speaker06',
    image: speaker_06,
    title: 'speaker06title',
    topic: 'speaker06topic',
    content: 'speaker06content',
    intro: 'speaker06intro',
    link: 'https://www.facebook.com/profile.php?id=100000593120503',
  },
  {
    name: 'speaker07',
    image: speaker_07,
    title: 'speaker07title',
    topic: 'speaker07topic',
    content: 'speaker07content',
    intro: 'speaker07intro',
    link: 'https://kpmg.com/tw/zh/home/insights/2016/07/social-enterprise-service.html',
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
