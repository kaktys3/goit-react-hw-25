import { useState } from 'react'
import HomePage from './components/HomePage/HomePage.jsx'
import './App.css'
import MoviesPage from './components/MoviesPage/MoviesPage.jsx'
import { Routes, Route, NavLink } from 'react-router-dom'
import MoviesSerch from './components/MoviesSerch/MoviesSerch.jsx'
import { Cast } from './components/MoviesPage/Cast.jsx'
import { Reviews } from './components/MoviesPage/Reviews.jsx'

function App() {

  return (
    <>
      <header>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/movies'>movies</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/movies' element={<MoviesSerch />} />
        <Route path='/movies/:id' element={<MoviesPage />}>
          <Route path='/movies/:id/cast' element={<Cast/>}/>
          <Route path='/movies/:id/reviews' element={<Reviews/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
