import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Reviews() {
    const [reviewsInfo, setReviewsInfo] = useState()
    const { id } = useParams()

    useEffect(() => {
        const fetch = async () => {
            const reviews = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=cf1c71e62767c76c5de36610e4908325&language=en-US&page=1`)
            setReviewsInfo(reviews.data.results)
        }

        fetch()
    }, [id])

    return (
        <>
            {reviewsInfo && reviewsInfo.map(e => (
                <div>
                    <h3>Author: {e.author}</h3>
                    <p>{e.content}</p>
                </div>
            ))}
        </>
    )
}