import { GET_MOVIES, SEARCH_MOVIES } from "./movie.type"






const initState={
    movies:[]
}
export const movieReducer =(state=initState,{payload,type})=>{
  
    switch(type){
      
       case GET_MOVIES :{
        return{
           ...state,
           movies:payload
        }
    }
    case SEARCH_MOVIES :{
        return{
           ...state,
           movies:payload
        }
    }
       default:{
         return state
       }
    }
}