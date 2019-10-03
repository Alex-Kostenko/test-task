import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Navigation from './component/navigation';
import BodyTable from './component/bodyTable';

const App = () => {

  useEffect(() => {
    getData()
  }, []);

  const [data, setData] = useState([]);

  async function getData(startItem = 0, limitItems = 5) {
    console.log(`https://jsonplaceholder.typicode.com/todos?_start=${startItem}&_limit=${limitItems}`);
    
    await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${startItem}&_limit=${limitItems}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setData(json)
      });
  }

  return (
    <div className="App">

      <BodyTable 
        data={data}
      />

      <Navigation 
        getData={(page, limit) => getData(page, limit)}
      />

    </div>
  );
}

export default App;
