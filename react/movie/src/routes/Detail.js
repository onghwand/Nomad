
import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';

function Detail() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([]) 
    // console.log(id)
    const getDetail = async() => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        const json = await response.json()
        setMovie(json.data.movie)
        setLoading(false)
    }
    console.log(movie.title)
    useEffect(()=> {getDetail()},[])
    return (
    <div><h1>detail</h1>
    {loading? <h2>Loading...</h2> : 
    <h1>{movie.title}</h1>}
    </div>
    )
}


export default Detail