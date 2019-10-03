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

  const sortById = (arr, item) => {
    return arr.sort((a, b) => a.id > b.id ? 1 : -1).concat();
  }

  const sortByUserId = (arr, item) => {
    return arr.sort((a, b) => a.userId > b.userId ? 1 : -1).concat();
  }

  const sortByAbc = (arr, item) => {
    function rules(a, b) {

      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }

      return 0;
    }

    return arr.sort(rules).concat();
  }

  const handleSort = (sortTitle) => {
    console.log(data);

    switch (sortTitle) {
      case 'id':
        console.log('id');
        setData(sortById(data, sortTitle));
        break;

      case 'userId':
        console.log('userId');
        setData(sortByUserId(data, sortTitle));
        break;
        
      case 'title':
        console.log('title');
        setData(sortByAbc(data, sortTitle));
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
