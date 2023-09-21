import React from 'react';
import './App.css';
import VoteList from './components/VoteList/VoteList';
import VoteResult from './components/VoteResult/VoteResult';

function App() {
  const votes = [
    { content: "&#128515;", amount: 0 },
    { content: "&#128516;", amount: 5 },
    { content: "&#128517;", amount: 7 },
    { content: "&#128518;", amount: 1 },
    { content: "&#128519;", amount: 11 },
  ];
  
  return (
    <div className="wrapper">
      <VoteList votes={votes} />
      <VoteResult votes={votes} />
    </div>
  );
}

export default App;
