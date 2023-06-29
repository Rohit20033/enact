import { Box, Container, Heading, IconButton, Stack, Text,useBreakpointValue} from '@chakra-ui/react';
import React, { useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import CardCom from './card';
const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed:1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
function SlickCom() {
    const [slider,setSlider]=useState(Slider | null)
    const top = useBreakpointValue({ base: '10%', md: '10%' });
  const side = useBreakpointValue({ base: '10%', md: '10px' });
  
  const cards = [
    {
      title: 'The Witcher',
      image:
        'https://www.cdprojekt.com/en/wp-content/uploads-en/2022/03/16-9-en.png',
        img:"https://flxt.tmsimg.com/assets/p17580215_b_v13_ac.jpg",
    },
    {
      title: 'Spider-Man: Across the Spider-Verse',
      image:
        'https://www.livelaw.in/h-upload/2023/05/31/1500x900_474422-spider-man-across-the-spider-verse.jpg',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8vd26QYEjTNY2Jj1Ze7mnuScsIHrPL2z5g0Ti93WFckxRHpi1mvGA0cVhbrHGCcRsRRo&usqp=CAU",
    },
    {
      title: 'Through My Window: Across the Sea',
      image:
        'https://i.ytimg.com/vi/PAcpPKi6aHA/maxresdefault.jpg',
        img:"https://de.web.img3.acsta.net/pictures/23/06/02/11/38/5808910.jpg",
    },
  ];

  return (
    <Box
    
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
            <CardCom index={index} card={card}/>
       
        ))}
      </Slider>
    </Box>

  )
}

export default SlickCom