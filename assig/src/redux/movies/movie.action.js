

import axios from "axios"
import { GET_MOVIES, SEARCH_MOVIES } from "./movie.type";

export const getAll = () => async (dispatch)=>{

    const  res = await axios.get(`https://fancy-bee-twill.cyclic.app/movies?_page=1&_limit=10`)
    
  return dispatch({
      type:GET_MOVIES,
      payload:res.data
  })
   
} 

export const getMovies = (v) => async (dispatch)=>{
    let res;
    

     if(v){
        res = await axios.get(`https://fancy-bee-twill.cyclic.app/movies?title=${v}`)
      }
    
 

    return dispatch({
        type:SEARCH_MOVIES  ,
        payload:res.data
    })
     
} 
