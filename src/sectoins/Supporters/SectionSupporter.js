import { Flex, SimpleGrid, Text, Image } from '@chakra-ui/react';
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

const SectionSupporter = () => {
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
        Supporter
      </Text>

      <Flex
        w="80%"
        align="center"
        justify="center"
        direction="column"
        gap="20px"
      >
        <Text textStyle="h4" color="cloud.500">
          Organizers
        </Text>
        <Image src={pickup} />
      </Flex>
      <Flex w="80%" align="center" direction="column" gap="20px">
        <Text textStyle="h4" color="cloud.500">
          Co-organizers{' '}
        </Text>
        <SimpleGrid columns={{ base: 2, lg: 4 }} gap="20px">
          {[co_01, co_02, co_03, co_04].map((item, index) => (
            <Image key={index} src={item} />
          ))}
        </SimpleGrid>
      </Flex>
      <Flex w="80%" align="center" direction="column" gap="20px">
        <Text textStyle="h4" color="cloud.500">
          Supporting Partners
        </Text>
        <SimpleGrid columns={{ base: 2, lg: 4 }} gap="20px">
          {[
            sup_01,
            sup_02,
            sup_03,
            sup_04,
            sup_05,
            sup_06,
            sup_07,
            sup_08,
            sup_09,
            sup_10,
            sup_11,
            sup_12,
            sup_13,
            sup_14,
            sup_15,
            sup_16,
            sup_17,
          ].map((item, index) => (
            <Image key={index} src={item} />
          ))}
        </SimpleGrid>
      </Flex>
      <Flex w="80%" align="center" direction="column" gap="20px">
        <Text textStyle="h4" color="cloud.500">
          Sponsor
        </Text>
        <SimpleGrid columns={{ base: 2, lg: 4 }} gap="20px">
          {[sponsor_01, sponsor_02].map((item, index) => (
            <Image key={index} src={item} />
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default SectionSupporter;
