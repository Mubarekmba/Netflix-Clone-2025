// Row.jsx
import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  // Movies list state
  const [movies, setMovies] = useState([]);

  // Trailer video id
  const [trailerUrl, setTrailerUrl] = useState("");

  // TMDB base image url
  const base_url = "https://image.tmdb.org/t/p/original";

  // Fetch movies when row loads or fetchUrl changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results || []);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  // When user clicks a poster → show trailer
  const handleClick = async (movie) => {
    // Close trailer if already open
    if (trailerUrl) {
      return setTrailerUrl("");
    }

    try {
      // Find trailer from movieTrailer package
      const url = await movieTrailer(
        movie?.title || movie?.name || movie?.original_name || ""
      );

      if (!url) return;

      // Extract YouTube video ID
      const urlParams = new URLSearchParams(new URL(url).search);
      setTrailerUrl(urlParams.get("v"));
    } catch (err) {
      console.log("Trailer not found:", err);
    }
  };

  // YouTube player options
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>

      {/* Movie posters container */}
      <div className="row__posters">
        {movies?.map((movie) => {
          const imagePath = isLargeRow
            ? movie.poster_path
            : movie.backdrop_path;

          if (!imagePath) return null; // Prevent broken images

          return (
            <img
              key={movie.id}
              src={`${base_url}${imagePath}`}
              alt={movie.name || movie.title}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
            />
          );
        })}
      </div>

      {/* Trailer container */}
      {trailerUrl && (
        <div style={{ padding: "40px" }}>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row;
