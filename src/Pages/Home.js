import React, { useState } from "react";
import "./Home.css";
import Nav from "../Component/nav";
import { Link } from "react-router-dom";

const movieData = [
  {
    Title: "Chandu Champion",
    Poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chandu-champion-et00363650-1715754023.jpg",
    Description: "This is the description for Chandu Champion. "
  },
  {
    Title: "Khel Khel Mein",
    Poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/khel-khel-mein-et00399518-1722516491.jpg",
    Description: "This is the description for Khel Khel Mein."
  },
  {
    Title: "Stree 2",
    Poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg",
    Description: "This is the description for Stree 2."
  },
  {
    Title: "Vedha",
    Poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vedaa-et00386426-1723550870.jpg",
    Description: "This is the description for Vedha."
  },
];

function Home() {
  const [filteredMovies, setFilteredMovies] = useState(movieData);

  const handleSearch = (query) => {
    const filtered = movieData.filter((movie) =>
      movie.Title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <>
      <Nav onSearch={handleSearch} />
      <section className="movie-page">
        <div className="grid movie-list">
          {filteredMovies.map((curMovieElem, index) => {
            const { Title, Poster } = curMovieElem;
            const movieName = Title.substring(0, 15);

            return (
              <Link
                to={`/movie/${encodeURIComponent(Title)}`}
                key={index}
                state={{ movie: curMovieElem }} 
              >
                <div className="card">
                  <div className="card-info">
                    <h2>
                      {movieName.length > 20 ? `${movieName}...` : movieName}
                    </h2>
                    <img src={Poster} alt={Title} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
