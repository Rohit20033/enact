import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './homePage'
import SearchPage from './searchPage'
import AllMovies from './allMovies'


function AllRouts() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/movies' element={<AllMovies/>}/>
    </Routes>
  )
}

export default AllRouts