import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/demo.css"
import Planets from "./Planets";
import {PlanetProfile} from "./PlanetProfile"

const CharacterProfile = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/people/${id}/`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.log("Error when loading character profile", error);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div style={{fontSize: '50px', color: 'white'}}>Loading...</div>;
  }

  const {
    name,
    gender,
    height,
    eye_color,
    hair_color,
    homeworld,
    species,
    skin_color,
    birth_year,
    mass,
  } = character;

  return (
    <div style={{
       backgroundColor: "rgba(0, 0, 0, 0.4)", color: "white", 
       marginBottom: "0", justifyContent: 'center', textAlign: 'center'}}>
      <div className="d-flex justify-content-center">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={name}
        style={{padding: '0px 30px 30px 0px'}}
      />
      <div style={{width: '50vh'}}>
      <h1>{name}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit sapien, 
        scelerisque ac risus eu, rhoncus mattis dui. Morbi in vestibulum purus. Duis hendrerit ut tortor 
        eu placerat. Aenean dapibus facilisis euismod. Morbi consectetur eu eros vitae facilisis. Etiam placerat 
        scelerisque tellus, vel accumsan augue. Ut in odio vel sem bibendum efficitur. Sed et lectus metus.
        Suspendisse at massa sodales velit consequat consectetur eu ut ante. Cras placerat pharetra nibh, 
        ac tincidunt odio mollis id. Sed eu condimentum mi, ornare finibus ante. Maecenas convallis euismod condimentum.
        Quisque sodales lectus nisl, at tincidunt libero fringilla ut. Donec pretium odio non arcu scelerisque, 
        sit amet elementum nibh aliquam. Sed eleifend nibh volutpat leo molestie laoreet. 
        Proin ullamcorper varius metus id congue. Ut et mattis diam, quis sagittis neque. Pellentesque pharetra, 
        dui ac luctus volutpat, orci nisl tincidunt urna, in blandit arcu eros eu nisi. Duis egestas sodales urna.</p>
      </div>
      </div>
      <div className="d-flex justify-content-center">

      <div style={{color: 'white', backgroundColor: 'white', width: '130vh', height: '3px'}}></div>
      
      </div>

      <div className="info-container d-flex justify-content-center" >
      <p>Birthday year:<br></br> {birth_year}</p>

      <div style={{color: 'white', backgroundColor: 'white', height: '10vh', width: '2px'}}></div>
      <p>Gender:<br></br> {gender}</p>

      <div style={{color: 'white', backgroundColor: 'white', height: '10vh', width: '2px'}}></div>
      <p>Height:<br></br> {height}</p>

      <div style={{color: 'white', backgroundColor: 'white', height: '10vh', width: '2px'}}></div>
      <p>Mass:<br></br> {mass}</p>

      <div style={{color: 'white', backgroundColor: 'white', height: '10vh', width: '2px'}}></div>
      <p>Eye Color:<br></br> {eye_color}</p>

      <div style={{color: 'white', backgroundColor: 'white', height: '10vh', width: '2px'}}></div>
      <p>Hair Color:<br></br> {hair_color}</p>

      <div style={{color: 'white', backgroundColor: 'white', height: '10vh', width: '2px'}}></div>
      <p>Skin Color:<br></br> {skin_color}</p>

      <div style={{color: 'white', backgroundColor: 'white', height: '10vh', width: '2px'}}></div>
      <p>Homeworld:<br></br><Link to={`/planets/${homeworld.split("/").filter(Boolean).pop()}`}>
      Click to view home planet
      </Link></p>

      <div style={{color: 'white', backgroundColor: 'white', height: '10vh', width: '2px'}}></div>
      <p>Species:<br></br> {species.join(", ")}</p>
      </div>

    </div>
  );
};

export default CharacterProfile;