import { Box, Button, Flex, Grid, GridItem, Heading, Spacer, Text,IconButton, Input } from "@chakra-ui/react"
import {BiSearchAlt2} from "react-icons/bi"
import {RxVideo} from "react-icons/rx"
import {CgProfile} from "react-icons/cg"
import {IoMdClose} from "react-icons/io"
import {AiOutlineHome} from "react-icons/ai"
 import {Link, NavLink} from "react-router-dom"
import {useState} from "react"
import { WiDaySunny, WiMoonWaningCrescent2 } from "react-icons/wi"
function Navbar(){  
    return(
       <>
         <Box height={"50px"} position={"sticky"} display={"flex"} alignItems={"center"} justifyContent={"space-around"}>
            <Link to={"/"}>
            <Box>
                <AiOutlineHome size={25}/>
            </Box>
            </Link>
            <Link to="/search">
            <Box>
                <BiSearchAlt2 size={25}/>
            </Box>
            </Link>
            <Link to={"/movies"}>
            <Box>
                <RxVideo size={25}/>
            </Box>
            </Link>
            <Box>
                <CgProfile size={25}/>
            </Box>
         </Box>
       </>
    )
}

export default Navbar