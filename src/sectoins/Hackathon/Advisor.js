import { SimpleGrid } from '@chakra-ui/react';

import advisor_01 from 'assets/images/advisor/advisor_01.png';
import advisor_02 from 'assets/images/advisor/advisor_02.png';
import advisor_03 from 'assets/images/advisor/advisor_03.png';
import advisor_04 from 'assets/images/advisor/advisor_04.png';
import advisor_05 from 'assets/images/advisor/advisor_05.png';
import advisor_06 from 'assets/images/advisor/advisor_06.png';
import advisor_07 from 'assets/images/advisor/advisor_07.png';
import advisor_08 from 'assets/images/advisor/advisor_08.png';
import advisor_09 from 'assets/images/advisor/advisor_09.png';

import SmallCard from 'components/cardModal/SmallCard';

const ASVISOR_DATA = [
  {
    image: advisor_01,
    name: 'advisor01',
    title: 'advisor01title',
    intro: 'advisor01intro',
    link: 'https://www.linkedin.com/in/rich-lichi-huang',
  },
  {
    image: advisor_02,
    name: 'advisor02',
    title: 'advisor02title',
    intro: 'advisor02intro',
    link: 'https://certs.turingchain.tech',
  },
  {
    image: advisor_03,
    name: 'advisor03',
    title: 'advisor03title',
    intro: 'advisor03intro',
    link: 'https://instagram.com/rick_artzy',
  },
  {
    image: advisor_04,
    name: 'advisor04',
    title: 'advisor04title',
    intro: 'advisor04intro',
    link: 'https://www.linkedin.com/in/yi-wenchou/',
  },
  {
    image: advisor_05,
    name: 'advisor05',
    title: 'advisor05title',
    intro: 'advisor05intro',
    link: 'https://www.linkedin.com/in/Camila Sáenz',
  },
  {
    image: advisor_06,
    name: 'advisor06',
    title: 'advisor06title',
    intro: 'advisor06intro',
    link: 'https://www.facebook.com/groups/129129363603000/',
  },
  {
    image: advisor_07,
    name: 'advisor07',
    title: 'advisor07title',
    intro: 'advisor07intro',
    link: 'https://goodtogo.tw/',
  },
  {
    image: advisor_08,
    name: 'advisor08',
    title: 'advisor08title',
    intro: 'advisor08intro',
    link: 'https://bento.me/hannieliu',
  },
  {
    image: advisor_09,
    name: 'advisor09',
    title: 'advisor09title',
    intro: 'advisor09intro',
    link: 'http://www.icid.ncku.edu.tw/',
  },
];

const Advisor = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={6}>
      {ASVISOR_DATA.map((item, index) => (
        <SmallCard key={index} {...item} />
      ))}
    </SimpleGrid>
  );
};

export default Advisor;
