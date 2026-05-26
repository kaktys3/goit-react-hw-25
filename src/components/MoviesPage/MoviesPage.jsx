import { Link, Outlet, useParams, useLocation } from "react-router-dom"
import { IoStarSharp } from "react-icons/io5";
import movie from './MoviesPage.module.css'
import { useEffect, useState } from "react"
import axios from "axios"

export default function MoviesPage() {
    const [infoData, setData] = useState(null)
    const { id } = useParams()
    const location = useLocation()

    useEffect(() => {
        const deatailInfo = async () => {
            try {
                const data = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=cf1c71e62767c76c5de36610e4908325&language=en-US&append_to_response=credits`
                )
                setData(data.data)
            } catch (error) {
                console.error("Error fetching movie details:", error)
            }
        }
        if (id) deatailInfo()
    }, [id])

    return (
        <>
            {infoData && (
                <section className={movie.detailsContainer}>
                    <Link to={location.state.from} className={movie.backButton}>Go back</Link>
                    <div className={movie.mainInfo}>
                        <div className={movie.posterWrapper}>
                            <img
                                className={movie.poster}
                                src={`https://image.tmdb.org/t/p/w300${infoData.poster_path}`}
                                alt={infoData.title}
                            />
                        </div>

                        <div className={movie.description}>
                            <div>
                                <h1 className={movie.title}>{infoData.title}</h1>
                                <p className={movie.score}>
                                    User Score: {Math.round(infoData.vote_average)}
                                    <IoStarSharp className={movie.starIcon} color="yellow" />
                                </p>
                            </div>
                            <div>
                                <h2 className={movie.subtitle}>Overview</h2>
                                <p className={movie.text}>{infoData.overview}</p>
                            </div>
                            <div><h3 className={movie.subtitle}>Genres</h3>
                                <p className={movie.text}>
                                    {infoData.genres.map((g) => g.name).join(', ')}
                                </p></div>
                        </div>
                    </div>

                    <div className={movie.additionalSection}>
                        <p className={movie.additionalTitle}>Additional information</p>
                        <ul className={movie.linksList}>
                            <li>
                                <Link className={movie.link} to={`/movies/${id}/cast`}>Cast</Link>
                            </li>
                            <li>
                                <Link className={movie.link} to={`/movies/${id}/reviews`}>Reviews</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={movie.outletWrapper}>
                        <Outlet />
                    </div>
                </section>
            )}
        </>
    )
}