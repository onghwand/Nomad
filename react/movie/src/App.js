import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const getMovies = async() => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
    const json = await response.json()
    setMovies(json.data.movies)
    setLoading(false)
  }
  useEffect(() => {
    getMovies()
  }, [])
  console.log(movies)
  return (
    <div>
      <h1>DONGHWAN MOVIE</h1>
      {loading? <h1>Loading...</h1> : 
      <div>
        {movies.map((movie) => 
        <div key={movie.id}>
          <img src={movie.medium_cover_image} alt=".." />
          <h2>{movie.title}</h2>
          <p>{movie.summary}</p>
          {movie.genres.map((genre,idx) => <li key={idx}>{genre}</li>)}
          
        </div>
        )}
      </div>
      }
      
    </div>
  );
}

export default App;
