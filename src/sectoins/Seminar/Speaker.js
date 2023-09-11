import { Flex, Text } from '@chakra-ui/react';
import Title from 'components/Title';
import Slider from 'components/Slider/Slider';

const SPEAKER_DATA = [
  {
    name: 'Soking Wang',
    title: '千綺創意設計 產品設計總監',
  },
  {
    name: 'Lynn Huang',
    title: 'UI 設計師',
  },
  {
    name: 'Kat Wang',
    title: 'iCHEF 產品設計師',
  },
];

const Speaker = () => {
  return (
    <Flex w="100%" direction="column" align="center">
      <Title title="Speaker" subTitle="Speaker" />
      <Slider data={SPEAKER_DATA} />
    </Flex>
  );
};

export default Speaker;
