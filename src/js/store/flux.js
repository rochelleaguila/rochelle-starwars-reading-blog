// const getState = ({ getStore, getActions, setStore }) => {
// 	return {
// 	  store: {
// 		favorites: [],
// 	  },
// 	  actions: {
// 		getDataPeople: async () => {
// 		  try {
// 			const store = getStore();
// 			const result = await fetch("https://www.swapi.tech/api/people?page=1&limit=20");
// 			const data = await result.json();
			
// 			setStore({ ...store, people: data.results });
// 			console.log("API respondió bien con primera lista de url", data);
// 			const actions = getActions();
// 			await actions.mappingFetch();
// 		  } catch (error) {
// 			console.log("No se pudo recuperar lista de urls ", error);
// 		  }
// 		},
// 		getDataPlanets: async () => {
// 		  try {
// 			const store = getStore();
// 			const result = await fetch("https://www.swapi.tech/api/planets?page=1&limit=20");
// 			const data = await result.json();
			
// 			setStore({ ...store, planets: data.results });
// 			console.log("API respondió bien con primera lista de url", data);
// 			const { mappingFetchPlanets } = getActions();
// 			await mappingFetchPlanets();
// 		  } catch (error) {
// 			console.log("No se pudo recuperar lista de urls ", error);
// 		  }
// 		},
  
// 		setFavoritesCharacters: (characterName) => {
// 			const store = getStore();
// 			const favoriteCharacterAlreadyExist = store.favorites.includes(characterName);
// 			if (!favoriteCharacterAlreadyExist) {
// 			  setStore({ favorites: [...store.favorites, characterName] });
// 			}
// 		  },

// 		  setFavorites: (newFavorites) => {
// 			setStore({ favorites: newFavorites });
// 		},
  
// 		setFavoritesPlanets: (planet) => {
// 		  const store = getStore();
// 		  const favoritePlanetAlreadyExist = store.favorites.includes(planet.result.properties.name);
// 		  if (!favoritePlanetAlreadyExist) {
// 			setStore({ favorites: [...store.favorites, planet.result.properties.name] });
// 		  }
// 		},
  
// 		deleteFavorite: (index) => {
// 		  const store = getStore();
// 		  const updatedFavorites = [...store.favorites];
// 		  updatedFavorites.splice(index, 1);
// 		  setStore({ favorites: updatedFavorites });
// 		},
// 	  },
// 	};
//   };
  
//   export default getState;
const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		favorites: [],
	  },
	  actions: {
		getDataPeople: async () => {
		  try {
			const store = getStore();
			const result = await fetch("https://www.swapi.tech/api/people?page=1&limit=20");
			const data = await result.json();
  
			setStore({ ...store, people: data.results });
			console.log("API responded well with first url list", data);
		  } catch (error) {
			console.log("Could not fetch urls", error);
		  }
		},
		getDataPlanets: async () => {
		  try {
			const store = getStore();
			const result = await fetch("https://www.swapi.tech/api/planets?page=1&limit=20");
			const data = await result.json();
  
			setStore({ ...store, planets: data.results });
			console.log("API responded well with first url list", data);
		  } catch (error) {
			console.log("Could not fetch urls", error);
		  }
		},
  
		setFavoritesCharacters: (characterName) => {
		  const store = getStore();
		  const favoriteCharacterAlreadyExist = store.favorites.includes(characterName);
		  if (!favoriteCharacterAlreadyExist) {
			setStore({ favorites: [...store.favorites, characterName] });
		  }
		},
  
		setFavorites: (newFavorites) => {
		  setStore({ favorites: newFavorites });
		},
  
		setFavoritesPlanets: (planet) => {
		  const store = getStore();
		  const favoritePlanetAlreadyExist = store.favorites.includes(planet.result.properties.name);
		  if (!favoritePlanetAlreadyExist) {
			setStore({ favorites: [...store.favorites, planet.result.properties.name] });
		  }
		},
  
		deleteFavorite: (index) => {
		  const store = getStore();
		  const updatedFavorites = [...store.favorites];
		  updatedFavorites.splice(index, 1);
		  setStore({ favorites: updatedFavorites });
		},
	  },
	};
  };
  
  export default getState;
