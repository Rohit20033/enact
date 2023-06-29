// import { Box, Image, Text } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAll } from '../redux/movies/movie.action'

// function LatestMov() {
//     const [data,setData]=useState([])
//     const {movies}=useSelector((state)=>state.movie)
//     const dispatch =useDispatch()

//     useEffect(()=>{
//         dispatch(getAll())
//         setData(movies)
//         console.log(data)
//     },[dispatch,movies])
//   return (
//    <>
//    <Box >
//    <Box display={"flex"}>
//     <Text fontSize={["20px","20px","40px"]} marginLeft={"20px"} as={"b"}>
//         Latest Movies
//     </Text>
//     </Box>
//    <Box width={"95%"} margin={"auto"} marginTop={"20px"} display={"flex"} overflow={"scroll"} gap={"20px"}>
//        {
//         data.map((m)=>{
//             return <>
//              <Box>
//                 <Image src="https://m.media-amazon.com/images/M/MV5BNGMzYWZlYmYtNTcyMC00ZGVjLThjN2ItMjY4MjkwN2NlMjYwXkEyXkFqcGdeQXVyOTU0NjY1MDM@._V1_FMjpg_UX1000_.jpg"/>
//              </Box>
//             </>
//         })
//        }
//     </Box>
//    </Box>
//    </>
//   )
// }

// export default LatestMov