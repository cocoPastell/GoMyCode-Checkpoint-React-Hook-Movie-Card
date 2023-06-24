import React from "react";
import "./MovieCard.css";

export const MovieCard = (props) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="card">
      <div className="poster">
        <img src={API_IMG + props.poster_path} alt="" />
      </div>
      <div className="info">
        <p className="title">{props.title}</p>
        <p className="vote">{props.vote_average}</p>
        <p className="description">{props.overview}</p>
      </div>
    </div>
  );
};
