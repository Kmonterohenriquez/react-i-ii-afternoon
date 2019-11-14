import React from 'react';
import Header from './component/Header';
import PeopleInfo from './component/PeopleInfo';
import '../src/css/App.css';


function App() {
  return (
    <div className="App-container">
      <Header />
      <PeopleInfo />
    </div>
  );
}

export default App;
