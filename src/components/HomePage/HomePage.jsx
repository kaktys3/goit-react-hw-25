import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import home from './HomePage.module.css'
import axios from 'axios'

const HomePage = () => {
    const [filmData, setFilmData] = useState([])

    useEffect(() => {
        const data = async () => {
            const info =  await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cf1c71e62767c76c5de36610e4908325&language=en-US`)
            console.log(info)
            setFilmData([info])
        }

        data()
    }, [])

    return (
        <>
        <section>
            <h1>Treding today</h1>
            {filmData.length && filmData[0].data.results.map((e) => (
                <ul>
                    <li key={e.id}><Link key={e.id} href={e.backdrop_path} to={`/movies/${e.id}`} state={{from: '/'}}>{e.title}</Link></li>
                </ul>
            ))}
        </section>
        </>
    )
} 

export default HomePage