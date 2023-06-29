import { Box, Button, Image, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../redux/movies/movie.action'

function SearchPage() {
    const [v,setV]=useState("")
    const [data,setData]=useState([])

    const {movies}=useSelector((state)=>state.movie)
    const dispatch =useDispatch()

    useEffect(()=>{
        
        setData(movies)
        
    },[dispatch,movies])

    const handleChnage=(e)=>{
       setV(e.target.value)
    }
    const handleClick=()=>{
          if(v===""||v===null||v===undefined){
            return
          }
         dispatch(getMovies(v))
         
    }
  return (
    <>
    <Input value={v} onChange={handleChnage} backgroundColor={"white"} width={"60%"} marginTop={"30px"} placeholder='Search'/>
    <Button onClick={handleClick} marginLeft="20px">
        Search
    </Button>
    <SimpleGrid width={["100%","100%","80%"]} margin={"auto"} columns={[1,1,3]} marginTop={"100px"} spacing={10}>
        {
            data.map((m)=>{
                return <>
                <SimpleGrid boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"width={"100%"} columns={[2,2,1]} height={["100px","auto","auto"]} spacing={10} p={4} >
                   <Box>
                     <Image  h={["70px","80px","200px"]} w={"100%"} src="https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg"/>
                   </Box>
                   <Box>
                      <Text  fontWeight={"bold"}>
                         {m.title}
                      </Text>
                      <Text fontSize={"9px"} color={"grey"}>
                        {m.year}
                      </Text>
                      <Text fontSize={"8px"} color={"grey"}>
                        {m.actors}
                      </Text>
                   </Box>
                </SimpleGrid>
                </>
            })
        }
</SimpleGrid>
    </>
    
  )
}

export default SearchPage