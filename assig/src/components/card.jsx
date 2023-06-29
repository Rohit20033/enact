import {
    Heading,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function CardCom({index,card}) {
  
    return (
      
        <Box
          w={'100%'}
         
          overflow={'hidden'}
         
          >
          <Image
           key={index}
           border={0}
           backgroundPosition="center"
           backgroundRepeat="no-repeat"
           backgroundSize={["cover","cover","cover"]}
           backgroundImage={`url(${card.image})`}
            h={["250px","300px",'450px']}
            w={'100%'}
            
          />
          <Box display={"flex"}   mt={[-16,-12,-20]} marginLeft={"10px"}>
           <Box width={"50%%"}>
           <Image
              box-shadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"
              boxSize={['120px',"100px","170px"]}
              height={["160px","180px","220px"]}
              src={card.img}
              
            />
           </Box>
           <Box  width={"50%"}  height={"100px"} marginTop={"80px"}>
           <Text fontSize={["12px","8px","35px"]} fontWeight={"bold"} marginLeft={"10px"}>
             {card.title}
            </Text>
           </Box>
          </Box>
             
         </Box> 
      
    );
  }