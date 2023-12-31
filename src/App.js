import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';

import '@fontsource/noto-sans-tc/400.css';
import '@fontsource/noto-sans-tc/500.css';
import '@fontsource/noto-sans-tc/600.css';
import '@fontsource/noto-sans-tc/700.css';

import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';

import Header from './sectoins/Header/Header';
import Hero from './sectoins/Hero';
import theme from 'theme/theme';
import { Element } from 'react-scroll';
import SectionPickupthon from './sectoins/Intro/SectionPickupthon';
import SectionSeminar from 'sectoins/Seminar/SectionSeminar';
import SectionHackathon from 'sectoins/Hackathon/SectionHackathon';
import SectionRegister from 'sectoins/SectionRegister';
import SectionSupporter from 'sectoins/Supporters/SectionSupporter';
import SectionFaq from 'sectoins/FAQ/SectionFaq';
import Footer from 'sectoins/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        w="100%"
        direction="column"
        bgColor="bg-dark"
        bgImage="radial-gradient(#263036 3px, #13181B 3px)"
        bgSize="32px 32px"
        minH="100vh"
      >
        <Element name="header" id="header">
          <Header />
        </Element>
        <Element name="Hero" id="Hero">
          <Hero />
        </Element>
        <Element name="Intro" id="Intro">
          <SectionPickupthon />
        </Element>
        <SectionSeminar />
        <Element name="Hackathon" id="Hackathon">
          <SectionHackathon />
        </Element>
        <Element name="Register" id="Register">
          <SectionRegister />
        </Element>
        <Element name="Supporters" id="Supporters">
          <SectionSupporter />
        </Element>
        <Element name="FAQ" id="FAQ">
          <SectionFaq />
        </Element>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
