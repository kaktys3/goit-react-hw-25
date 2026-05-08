import { useState } from 'react'
import { Link } from "react-router-dom"
import search from './MoviesSerch.module.css'
import axios from 'axios'

export default function MoviesSerch() {
    const [search, setSearch] = useState()
    const [filmInfo, setfilmInfo] = useState()

    const fetch = async () => {
        const info = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=cf1c71e62767c76c5de36610e4908325&query=${search}&include_adult=false&language=en-US&page=1`
        );
        setfilmInfo(info.data.results)
    }

    const hundelSubmit = (e) => {
        e.preventDefault()
        fetch()
    }

    console.log(filmInfo)

    return (
        <>
            <form onSubmit={hundelSubmit}>
                <input type="text" onChange={e => setSearch(e.target.value)} />
                <button type='submit'>Search</button>
            </form>

            {filmInfo && filmInfo.map((e) => (
                <ul>
                    <li key={e.id}><Link key={e.id} to={`/movies/${e.id}`}>{e.title}</Link></li>
                </ul>
            ))}
        </>
    )
}