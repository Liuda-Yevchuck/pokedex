import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

export const LoadButton = () => {
  const { setPokemonQuantity } = useContext(AppContext);

  return (
    <button
      type="button"
      className="load-more__button button is-link is-large is-rounded"
      onClick={() => {
        setPokemonQuantity(curent => curent + 12);
      }}
    >
      Load more
    </button>
  );
};
