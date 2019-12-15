import React from 'react';


import './App.css';
import Content from './layouts/content';
import data from './components/data';



function App() {
  
                    
  return (
    <div className="App">
      <Content data={data}/>
    </div>
  );
}

export default App;