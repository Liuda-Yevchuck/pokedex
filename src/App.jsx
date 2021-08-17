import React from 'react';
import { AppProvider } from './components/AppContext';
import { PokemonList } from './components/PokeList';
import { PokeInfo } from './components/PokeInfo';
import './App.scss';

const App = () => (
  <AppProvider>
    <div className="app">
      <PokemonList className="app__cards" />
      <PokeInfo />
    </div>
  </AppProvider>
);

export default App;
