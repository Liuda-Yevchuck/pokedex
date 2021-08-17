import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../AppContext';

export const PokemonCard = ({ poke }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const { setSelectedPokemonUrl } = useContext(AppContext);
  const { name, url } = poke;

  useEffect(() => {
    const fetchPokemon = async() => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      setPokemonInfo(responseData);
    };

    fetchPokemon().catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    });

    fetchPokemon();
  }, []);

  const capitalize = word => (
    `${word.charAt(0).toUpperCase()}${word.slice(1)}`
  );

  const colors = {
    fire: '#f5caba',
    grass: '#c9f099',
    electric: '#f0e7a3',
    water: '#b4e0e0',
    ground: '#a6977b',
    rock: 'a8a194',
    fairy: '#f5baee',
    poison: '#d7baf5',
    bug: '#e3c676',
    dragon: '#97b3e6',
    psychic: '#f2b8ca',
    flying: '#d8f0ef',
    fighting: '#ffe6bd',
    normal: '#fff',
  };

  if (pokemonInfo === null) {
    return <h1>Loading</h1>;
  }

  return (
    // eslint-disable-next-line
    <div
      className="app__card card"
      onClick={() => {
        setSelectedPokemonUrl(url);
      }}
      onKeyDown={() => {
        setSelectedPokemonUrl(url);
      }}
    >
      <img
        src={pokemonInfo.sprites.front_default}
        alt={pokemonInfo.name}
        className="card__image"
      />
      <h1 className="card__title">
        {capitalize(name)}
      </h1>
      <div className="card__info">
        {pokemonInfo.types.map(type => (
          <div
            key={type.slot}
            className="card__subtitle"
            style={{ backgroundColor: colors[type.type.name] }}
          >
            {type.type.name}
          </div>
        ))}
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  poke: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
