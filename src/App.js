import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import {useState, useEffect} from 'react';



//682ff834

const App = () => {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const API_URL = 'http://www.omdbapi.com/?apikey=682ff834'
  
    const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
  
  }
    
  useEffect(() => {
    searchMovies('Spiderman');
  }, [])
  
  return (
    <div className='app'>
      <h1>MovieLand</h1>
        <div className='Search'>
          <input 
            placeholder = "Search for Movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="Search for Movies"
            onClick={() =>searchMovies(searchTerm)}
          />
        </div>


        {movies?.length > 0 
          ? (
            <div className="container">
              {movies.map ((movie) => (
                 <MovieCard movie={movie}/>
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          )}


       
    </div>
  );
}

export default App;
