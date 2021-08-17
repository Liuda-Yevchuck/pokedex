import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../api/api';

export const AppContext = React.createContext({
  pokemons: [],
  setPokemons: () => {},
  selectedPokemonUrl: '',
  setSelectedPokemonUrl: () => {},
  pokemonQuantity: null,
  setPokemonQuantity: () => {},

});

export const AppProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState([]);
  const [pokemonQuantity, setPokemonQuantity] = useState(12);

  useEffect(() => {
    const fetchPokemons = async() => {
      const response = await fetch(`${BASE_URL}${pokemonQuantity}`);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      setPokemons(responseData.results);
    };

    fetchPokemons().catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    });
  }, [pokemonQuantity]);

  const contextValue = {
    pokemons,
    setPokemons,
    selectedPokemonUrl,
    setSelectedPokemonUrl,
    pokemonQuantity,
    setPokemonQuantity,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
