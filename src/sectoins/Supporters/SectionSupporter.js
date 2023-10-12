import { Flex, SimpleGrid, Text, Image, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import pickup from 'assets/images/brand/pickup.png';
import co_01 from 'assets/images/brand/co_01.png';
import co_02 from 'assets/images/brand/co_02.png';
import co_03 from 'assets/images/brand/co_03.png';
import co_04 from 'assets/images/brand/co_04.png';
import sup_01 from 'assets/images/brand/sup/sup_01.png';
import sup_02 from 'assets/images/brand/sup/sup_02.png';
import sup_03 from 'assets/images/brand/sup/sup_03.png';
import sup_04 from 'assets/images/brand/sup/sup_04.png';
import sup_05 from 'assets/images/brand/sup/sup_05.png';
import sup_06 from 'assets/images/brand/sup/sup_06.png';
import sup_07 from 'assets/images/brand/sup/sup_07.png';
import sup_08 from 'assets/images/brand/sup/sup_08.png';
import sup_09 from 'assets/images/brand/sup/sup_09.png';
import sup_10 from 'assets/images/brand/sup/sup_10.png';
import sup_11 from 'assets/images/brand/sup/sup_11.png';
import sup_12 from 'assets/images/brand/sup/sup_12.png';
import sup_13 from 'assets/images/brand/sup/sup_13.png';
import sup_14 from 'assets/images/brand/sup/sup_14.png';
import sup_15 from 'assets/images/brand/sup/sup_15.png';
import sup_16 from 'assets/images/brand/sup/sup_16.png';
import sup_17 from 'assets/images/brand/sup/sup_17.png';
import sponsor_01 from 'assets/images/brand/sponsor/sponsor_01.png';
import sponsor_02 from 'assets/images/brand/sponsor/sponsor_02.png';

const co = [
  {
    img: co_01,
    link: 'https://instagram.com/youth.ntpc?igshid=MzRlODBiNWFlZA==',
  },
  {
    img: co_02,
    link: 'https://www.facebook.com/madschooledusg/',
  },
  {
    img: co_03,
    link: 'https://www.yoshidesignlab.com/',
  },
  {
    img: sup_16,
    link: 'https://www.facebook.com/Le.Bistrot.Social/',
  },
  // {
  //   img: co_04,
  // },
];

const sup = [
  {
    img: sup_01,
    link: 'https://portaly.cc/aapdgo',
  },
  {
    img: sup_02,
    link: 'http://acue.design',
  },
  {
    img: sup_03,
    link: 'https://ARTZY.work',
  },
  {
    img: sup_04,
    link: 'https://daoori.com',
  },
  {
    img: sup_05,
    link: 'https://www.packageplus-tw.com/',
  },
  {
    img: sup_06,
    link: 'https://www.facebook.com/SocialAED',
  },
  {
    img: sup_07,
    link: 'https://www.linkedin.com/company/tryspot/',
  },
  {
    img: sup_08,
    link: '',
  },
  {
    img: sup_09,
    link: 'https://www.facebook.com/XChange.tw',
  },
  {
    img: sup_10,
    link: 'https://www.yourator.co/',
  },
  {
    img: sup_11,
    link: 'https://www.instagram.com/oneday.software/',
  },
  {
    img: sup_12,
    link: 'https://www.tysda.earth/',
  },
  {
    img: sup_13,
    link: 'https://www.instagram.com/bizthinking/',
  },
  {
    img: sup_14,
    link: 'https://goodtogo.tw',
  },
  {
    img: sup_15,
    link: 'http://mx.nthu.edu.tw/~yc.tseng/index.html',
  },
  {
    img: sup_17,
    link: 'https://www.uxi-design.com ',
  },
];

const sponsor = [
  {
    img: sponsor_01,
    link: 'https://kanshoku.co/',
  },
  {
    img: sponsor_02,
    link: 'https://jumping.group/',
  },
];

const SectionSupporter = () => {
  const { t } = useTranslation();
  return (
    <Flex
      w="100%"
      bgColor="aquaGreen.500"
      direction="column"
      align="center"
      py="40px"
      gap="48px"
      px="20px"
    >
      <Text textStyle="h2" color="yellow.500">
        {t('supporter')}
      </Text>

      <Flex
        w="80%"
        align="center"
        justify="center"
        direction="column"
        gap="20px"
      >
        <Text textStyle="h4" color="cloud.500">
          {t('organizers')}
        </Text>
        <Image src={pickup} />
      </Flex>
      <Flex w="80%" align="center" direction="column" gap="20px">
        <Text textStyle="h4" color="cloud.500">
          {t('sponsor')}
        </Text>
        <SimpleGrid columns={{ base: 2, lg: 4 }} gap="20px">
          {sponsor.map((item, index) => (
            <Link
              href={item.link}
              isExternal
              transition={'all 0.3s ease'}
              _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
            >
              <Image key={index} src={item.img} />
            </Link>
          ))}
        </SimpleGrid>
      </Flex>
      <Flex w="80%" align="center" direction="column" gap="20px">
        <Text textStyle="h4" color="cloud.500">
          {t('co')}
        </Text>
        <SimpleGrid columns={{ base: 2, lg: 4 }} gap="20px">
          {co.map((item, index) => (
            <Link
              href={item.link}
              isExternal
              transition={'all 0.3s ease'}
              _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
            >
              <Image key={index} src={item.img} />
            </Link>
          ))}
        </SimpleGrid>
      </Flex>
      <Flex w="80%" align="center" direction="column" gap="20px">
        <Text textStyle="h4" color="cloud.500">
          {t('sup')}
        </Text>
        <SimpleGrid columns={{ base: 2, lg: 4 }} gap="20px">
          {sup.map((item, index) => (
            <Link
              href={item.link}
              isExternal
              transition={'all 0.3s ease'}
              _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
            >
              <Image key={index} src={item.img} />
            </Link>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default SectionSupporter;
