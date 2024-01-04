import React, { useState, useEffect } from "react";
import "../../styles/Character.css"
import { Context } from '../store/appContext.js';
import { useContext } from 'react';
import {  Link, useNavigate } from 'react-router-dom';

const Characters = ({ addToFavorites }) => {
  const [characters, setCharacters] = useState([]);
  const { actions } = useContext(Context);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();

        const characters1 = data.results.map((character, index) => ({
          ...character,
          uid: index + 1,
        }));

        setCharacters(characters1);
      } catch (error) {
        console.log("Error when loading character", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div id="Character">
      <h2 style={{color: "yellow", import: "url('https://fonts.cdnfonts.com/css/star-wars')", fontFamily: "Star wars, sans-serif"}}>Characters</h2>
      <div className="card-container">
      {characters.map((character, index) => (
          <div className="card card-item" key={`character-${index}`}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} />
            <h3>{character.name}</h3>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <div style={{justifyContent: "center", textAlign: "center"}}>
              <Link
                to={`/characters/${character.uid}`}
                className="btn1 btn-dark"
                style={{ marginRight: "50px", marginBottom: "10px", color: "yellow"}}
              >
                Learn more!
              </Link>
              <button
                className="fa-solid fa-heart"
                style={{marginBottom: "20px", fontSize: "3vh"}}
                onClick={() => 	actions.setFavoritesCharacters(character.name)}
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;