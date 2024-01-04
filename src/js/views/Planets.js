import React, { useState, useEffect } from "react";
import Home from "./home"
import { Context } from '../store/appContext.js';
import { useContext } from 'react';
import {  useNavigate, Link } from 'react-router-dom';

const Planets = ({ addToFavorites }) => {
  const [planets, setPlanets] = useState([]);
  const { actions } = useContext(Context);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/planets/");
        const data = await response.json();

        setPlanets(data.results);
      } catch (error) {
        console.log("Error when loading the planets", error);
      }
    };

    fetchPlanets();
  }, []);

  return (
    <div>
      <h2 style={{color: "yellow", import: "url('https://fonts.cdnfonts.com/css/star-wars')", fontFamily: "Star wars, sans-serif"}}>Planets</h2>
      <div className="card-container">
        {planets.map((planet, index) => (
          <div className="card card-item" key={`planet-${index}`}>
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/dev18o2-7a23f26b-cd6d-4dee-83da-2eafe12c465e.jpg/v1/fill/w_894,h_894,q_70,strp/tatooine_star_wars_planet_collection_by_ericwhitted_dev18o2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2MThvMi03YTIzZjI2Yi1jZDZkLTRkZWUtODNkYS0yZWFmZTEyYzQ2NWUuanBnIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Z41Tsx74iElwppUJxze7ViuNOj7RMduFscr7HCpG21U"
              }}
              alt={planet.name}
            />
            <h3>{planet.name}</h3>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
            <div style={{justifyContent: "center", textAlign: "center"}}>
              <Link
                to={`/planets/${index + 1}`}
                className="btn1 btn-dark"
                style={{ marginRight: "50px", color: "yellow"}}
              >
                Learn more!
              </Link>
              <button
                className="fa-solid fa-heart"
                style={{marginBottom: "20px", fontSize: "3vh"}}
                onClick={() => 	actions.setFavoritesCharacters(planet.name)}
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planets;