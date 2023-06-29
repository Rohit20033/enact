import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAll } from '../redux/movies/movie.action'
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'

function AllMovies() {
    const [data,setData]=useState([])
     const {movies}=useSelector((state)=>state.movie)
      const dispatch =useDispatch()

      useEffect(()=>{
                dispatch(getAll())
                setData(movies)
                console.log(data)
      },[dispatch,movies])

  return (
    <>

       <Text fontSize={["20px","20px","40px"]} marginLeft={"20px"} as={"b"}>
        Movies
       </Text>
       <SimpleGrid width={["100%","100%","80%"]} margin={"auto"} columns={[1,1,3]} marginTop={"100px"} spacing={10}>
        {
            data.map((m)=>{
                return <>
                <SimpleGrid boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"width={"100%"} columns={[2,2,1]}  spacing={10} p={4} >
                   <Box>
                     <Image  h={["90px","80px","200px"]} w={"100%"} src="https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_UF894,1000_QL80_.jpg"/>
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

export default AllMovies