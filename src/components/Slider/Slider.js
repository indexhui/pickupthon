import { Swiper, SwiperSlide } from 'swiper/react';
import { Flex, Text } from '@chakra-ui/react';

// Import Swiper styles
import 'swiper/css';

import SliderItem from './SliderItem';

const Slider = props => {
  const { data } = props;
  return (
    <Flex w="100%" border="1px solid green">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <SliderItem name={item.name} title={item.title} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <Text color="white">Slide 2</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text color="white">Slide 3</Text>
        </SwiperSlide>
        <SwiperSlide>
          <Text color="white">Slide 4</Text>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
};

export default Slider;
