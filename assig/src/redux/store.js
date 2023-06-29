import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import { movieReducer } from "./movies/movie.reducer";



const rootReducer= combineReducers({
    movie:movieReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
export const store =  legacy_createStore(rootReducer,applyMiddleware(thunk))