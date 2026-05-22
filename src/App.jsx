import { useState, lazy, Suspense } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

// 1. Повертаємо HomePage до звичайного імпорту, щоб він вантажився одразу
import HomePage from './components/HomePage/HomePage.jsx'
import Loading from './components/Loading/Loading.jsx'

// Інші сторінки залишаємо лінивими
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage.jsx'))
const MoviesSerch = lazy(() => import('./components/MoviesSerch/MoviesSerch.jsx'))
const Cast = lazy(() => import('./components/MoviesPage/Cast.jsx'))
const Reviews = lazy(() => import('./components/MoviesPage/Reviews.jsx'))

function App() {
  return (
    <>
      <header>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/movies'>movies</NavLink>
      </header>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/movies' element={<MoviesSerch />} />
          <Route path='/movies/:id' element={<MoviesPage />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App