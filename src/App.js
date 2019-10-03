import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Navigation from './component/navigation';
import BodyTable from './component/bodyTable';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = async (startItem = 0, limitItems = 5) => {
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
      
      <Navigation 
        getData={(page, limit) => getData(page, limit)}
      />

      <BodyTable 
        data={data}
      />

    </div>
  );
}

export default App;
