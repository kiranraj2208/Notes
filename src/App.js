import React from 'react';
import './App.css';
import Layout from './Layout/Layout';


function App() {
  const onclick = () => {
      fetch('/getdata')
      .then( response => {
        alert(response);
        console.log(response)
        return response.json();
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        alert(error);
      })
  }

  return (
    <div className="App"> 
      <Layout />
    </div>
  );
}

export default App;
