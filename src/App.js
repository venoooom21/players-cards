import React from 'react';
import playerList from "./playerList";
import players from './players';

function App() {
  return (
    <div className="fifa">
      <h1>FIFA PLAYER CARDS</h1>
      <div className="player-cards">
        {playerList.map(player => (
          <div key={players.id} className="player-card">
            <img src={players.image} alt={players.name} />
            <h2>{players.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;