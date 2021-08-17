import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../AppContext';

export const PokeInfo = () => {
  const { selectedPokemonUrl } = useContext(AppContext);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async() => {
      const response = await fetch(selectedPokemonUrl);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      setPokemonDetails(responseData);
    };

    fetchPokemonDetails().catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    });

    fetchPokemonDetails();
  }, [selectedPokemonUrl]);

  if (selectedPokemonUrl.length === 0) {
    return <h1 className="app__title">select a pokemon</h1>;
  }

  if (pokemonDetails === null) {
    return <h1>loading</h1>;
  }

  return (
    <div className="info-card">
      <div className="card-image">
        <img
          className="card__image"
          src={pokemonDetails.sprites.front_default}
          alt={pokemonDetails.name}
        />
      </div>

      <h1 className="card__title">{pokemonDetails.name}</h1>

      <div className="card__table">
        <table className="table">
          <tbody>
            <tr>
              <td className="card__table">Type</td>
              <td>
                {pokemonDetails.types.map(type => (
                  <span>{`${type.type.name} `}</span>))}
              </td>
            </tr>

            {pokemonDetails.stats.map((item) => {
              const { stat } = item;

              return (
                <tr key={stat.name}>
                  <td>
                    {stat.name}
                  </td>

                  <td>{item.base_stat}</td>
                </tr>
              );
            })}

            <tr>
              <td>Weight</td>

              <td>{pokemonDetails.weight}</td>
            </tr>

            <tr>
              <td>total moves</td>

              <td>{pokemonDetails.moves.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
