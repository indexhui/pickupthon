import { Grid } from '@chakra-ui/react';
import IntroCard from './IntroCard';
const INTRO_LIST = [
  {
    title: 'introDesign',
    content: 'introDesignContent',
  },
  {
    title: 'introExchange',
    content: 'introExchangeContent',
  },
  {
    title: 'introCreative',
    content: 'introCreativeContent',
  },
  {
    title: 'introChallenge',
    content: 'introChallengeContent',
  },
];

const IntroCardGroup = () => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap="24px"
      pt={{ base: '40px', lg: '80px' }}
    >
      {INTRO_LIST.map((item, index) => {
        return (
          <IntroCard key={index} title={item.title} content={item.content} />
        );
      })}
    </Grid>
  );
};

export default IntroCardGroup;
