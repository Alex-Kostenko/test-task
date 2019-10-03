import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Navigation from './component/navigation';
import BodyTable from './component/bodyTable';

const TABLE_COLUMNS = [
  {
    label: 'UserId',
    sort: 'default',
  }, {
    label: 'Id',
    sort: 'default',
  }, {
    label: 'Title',
    sort: 'default',
  }
];

const App = () => {
  const [data, setData] = useState([]);
  const [sortdata, setSortData] = useState(TABLE_COLUMNS);

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

  const sortByNumbers = (arr, item) => {
    return arr.sort((a, b) => a.item < b.item ? 1 : -1).concat();
  }

  const sortByAbc = (a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }

  const handleSort = (sortTitle) => {
    console.log(data);
    

    switch (sortTitle) {
      case 'Id':
        setData(sortByNumbers(data, sortTitle))
        break;

      case 'UserId':
        setData(sortByNumbers(data, sortTitle))
        break;
      case 'Title':
        setData(data.sort(sortByAbc).concat())
        break;
    
      default:
        break;
    }
  }
  return (
    <div className="App">
      
      <Navigation 
        getData={(page, limit) => getData(page, limit)}
      />

      <BodyTable 
        data={data}
        onSorting={(sortTitle) => handleSort(sortTitle)}
      />

    </div>
  );
}

export default App;
