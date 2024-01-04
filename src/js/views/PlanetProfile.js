import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/demo.css";

const PlanetProfile = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
        const data = await response.json();
        setPlanet(data);
      } catch (error) {
        console.log("Error when loading planet profile", error);
      }
    };

    fetchPlanet();
  }, [id]);

  if (!planet) {
    return <div style={{ fontSize: "50px", color: "white" }}>Loading...</div>;
  }
  const backupImageUrl =
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/dev18o2-7a23f26b-cd6d-4dee-83da-2eafe12c465e.jpg/v1/fill/w_894,h_894,q_70,strp/tatooine_star_wars_planet_collection_by_ericwhitted_dev18o2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2MThvMi03YTIzZjI2Yi1jZDZkLTRkZWUtODNkYS0yZWFmZTEyYzQ2NWUuanBnIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Z41Tsx74iElwppUJxze7ViuNOj7RMduFscr7HCpG21U";

  const {
    name,
    climate,
    population,
    terrain,
    diameter,
    gravity,
    orbital_period,
    rotation_period,
  } = planet;

  return (
    <div style={{
      backgroundColor: "rgba(0, 0, 0, 0.4)", color: "white", 
      marginBottom: "0", justifyContent: 'center', textAlign: 'center'}}>
      <div className="d-flex justify-content-center">
      <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = backupImageUrl;
          }}
          alt={planet.name}
          style={{ padding: "0px 30px 0px 0px", width: '550px', height: '510px'}}
        />
        <div style={{ width: "60vh" }}>
          <h1>{name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit sapien, scelerisque ac risus eu, rhoncus mattis dui. Morbi in vestibulum
            purus. Duis hendrerit ut tortor eu placerat. Aenean dapibus facilisis euismod. Morbi consectetur eu eros vitae facilisis. Etiam placerat
            scelerisque tellus, vel accumsan augue. Ut in odio vel sem bibendum efficitur. Sed et lectus metus. Suspendisse at massa sodales velit
            consequat consectetur eu ut ante. Cras placerat pharetra nibh, ac tincidunt odio mollis id. Sed eu condimentum mi, ornare finibus ante.
            Maecenas convallis euismod condimentum. Quisque sodales lectus nisl, at tincidunt libero fringilla ut. Donec pretium odio non arcu scelerisque,
            sit amet elementum nibh aliquam. Sed eleifend nibh volutpat leo molestie laoreet. Proin ullamcorper varius metus id congue. Ut et mattis diam,
            quis sagittis neque. Pellentesque pharetra, dui ac luctus volutpat, orci nisl tincidunt urna, in blandit arcu eros eu nisi. Duis egestas sodales
            urna.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div style={{ color: "white", backgroundColor: "white", width: "130vh", height: "3px", margin: '4vh'}}></div>
      </div>
      <div className="info-container d-flex justify-content-center">
        <p>
          Climate:
          <br />
          {climate}
        </p>
        <div style={{ color: "white", backgroundColor: "white", height: "10vh", width: "2px" }}></div>
        <p>
          Population:
          <br />
          {population}
        </p>
        <div style={{ color: "white", backgroundColor: "white", height: "10vh", width: "2px" }}></div>
        <p>
          Terrain:
          <br />
          {terrain}
        </p>
        <div style={{ color: "white", backgroundColor: "white", height: "10vh", width: "2px" }}></div>
        <p>
          Diameter:
          <br />
          {diameter}
        </p>
        <div style={{ color: "white", backgroundColor: "white", height: "10vh", width: "2px" }}></div>
        <p>
          Gravity:
          <br />
          {gravity}
        </p>
        <div style={{ color: "white", backgroundColor: "white", height: "10vh", width: "2px" }}></div>
        <p>
          Orbital Period:
          <br />
          {orbital_period}
        </p>
        <div style={{ color: "white", backgroundColor: "white", height: "10vh", width: "2px" }}></div>
        <p>
          Rotation Period:
          <br />
          {rotation_period}
        </p>
      </div>
    </div>
  );
};

export default PlanetProfile;