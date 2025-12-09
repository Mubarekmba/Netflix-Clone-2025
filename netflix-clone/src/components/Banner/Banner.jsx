// Banner.jsx

import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css";

const Banner = () => {
  // Store a random Netflix original movie
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch a random movie on component mount
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);

        const results = response.data?.results || [];

        // Pick a random movie from the returned list
        const randomMovie = results[Math.floor(Math.random() * results.length)];

        setMovie(randomMovie);
      } catch (error) {
        console.error("Failed to load Banner movie:", error);
      }
    };

    fetchRandomMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  // Avoid rendering until movie is loaded
  if (!movie) return null;

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        {/* Movie Title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* Action Buttons */}
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* Movie Description */}
        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>

      {/* Bottom Fade Effect */}
      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;
