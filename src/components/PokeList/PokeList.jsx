import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { PokemonCard } from '../PokeCard';
import { LoadButton } from '../LoadButton';

export const PokemonList = () => {
  const { pokemons } = useContext(AppContext);

  return (
    <div>
      <h1 className="app__title">Pokedex</h1>
      <ul className="app__cards">
        {pokemons
          .map(pokemon => (
            <li key={pokemon.name}>
              <PokemonCard
                poke={pokemon}
              />
            </li>
          ))}
        <div className="app__button">
          <LoadButton />
        </div>
      </ul>
    </div>
  );
};
