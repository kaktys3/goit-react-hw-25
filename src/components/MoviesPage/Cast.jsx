import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function Cast() {
    const [actors, setActors] = useState()
    const { id } = useParams()

    useEffect(() => {
        const fetch = async () => {
            const actorData = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=cf1c71e62767c76c5de36610e4908325&language=en-US&append_to_response=credits`)

            setActors(actorData.data.credits.cast)
        }

        fetch()
    }, [id])

    return (
        <>
            {actors && actors.map(e => (
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300${e.profile_path}`} alt="" />
                    <p>{e.name}</p>
                    <p>{e.character}</p>
                </div>
            ))}
        </>
    )
}