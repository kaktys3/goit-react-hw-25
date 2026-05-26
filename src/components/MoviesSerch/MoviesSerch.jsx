import { useEffect, useState } from 'react'
import { Link, useSearchParams } from "react-router-dom"
import s from './MoviesSerch.module.css'
import axios from 'axios'

export default function MoviesSerch() {
    const [searchInfo, setSearch] = useState('')
    const [formSearch, setFormSearch] = useState('')
    const [filmInfo, setfilmInfo] = useState()
    const [serchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const searchId = serchParams.get('query')

        if (searchId) {
            setSearch(searchId)
        }
    }, [])

    useEffect(() => {
        const fetch = async () => {
            const info = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=cf1c71e62767c76c5de36610e4908325&query=${searchInfo}&include_adult=false&language=en-US&page=1`
            );
            setfilmInfo(info.data.results)
        }

        fetch()
    }, [searchInfo])


    const hundelSubmit = (e) => {
        e.preventDefault()
        setSearch(formSearch)

        setSearchParams({ query: formSearch })
    }

    console.log(serchParams.get("query"))

    return (
        <>
            <form onSubmit={hundelSubmit}>
                <input type="text" onChange={e => setFormSearch(e.target.value)} />
                <button type='submit'>Search</button>
            </form>

            {filmInfo && filmInfo.map((e) => (
                <ul>
                    <li key={e.id}><Link key={e.id} state={{from: `/movies?query=${serchParams.get("query")}`}} to={`/movies/${e.id}`}>{e.title}</Link></li>
                </ul>
            ))}
        </>
    )
}