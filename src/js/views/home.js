import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import Planets from "./Planets";
import Characters from "./Characters";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";

export const Home = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getDataPeople();
    actions.getDataPlanets();
  }, []);

  const handleDelete = (index) => {
    actions.deleteFavorite(index);
  };

  return (
    <div className="text-center mt-5">
      {/* <div className="dropend">
        <button className="btn btn-warning dropdown-toggle m-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Favorites {store.favorites.length}
        </button>
        <ul className="dropdown-menu mx-auto">
          {store.favorites.map((favorite, index) => {
            return (
              <li style={{ color: "rgb(255, 179, 0)" }} key={index}>
                <div className="favoritesListGroupSuper d-flex">
                <h4>
                  {favorite}
                </h4>
                  <button type="solid" className="bx-lg bx-tada-hover" color="orange" name="trash-alt" style={{border: "none", backgroundColor: "transparent", marginLeft: "auto"}} onClick={() => handleDelete(index)}>
                    <i class="fa-solid fa-trash" style={{color: "red"}}></i>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}

      <Characters />
      <div style={{ height: "15vh" }}></div>
      <Planets />
    </div>
  );
};

export default Home;
