import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import Navigation from './component/navigation';
import BodyTable from './component/bodyTable';

const TABLE_COLUMNS = [
  {
    label: 'UserId',
    key: 'userId',
    sort: 'default',
  }, {
    label: 'Id',   
    key: 'id',
    sort: 'default',
  }, {
    label: 'Title',
    key: 'title',
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

  const sortById = ( arr ) => {
    const id = sortdata.findIndex(x => x.key === 'id')
    let sortArray = sortdata.concat();

    if ( sortdata[id].sort === 'default') {
      sortArray[id].sort = 'asc';
    } else if ( sortdata[id].sort === 'desc') { 
      sortArray[id].sort = 'asc';
    } else { 
      sortArray[id].sort = 'desc';
    }
    
    setSortData(sortArray);

    if ( sortArray[id].sort === 'asc' ) {
      return arr.sort((a, b) => a.id > b.id ? 1 : -1).concat();
    } 

    return arr.sort((a, b) => a.id < b.id ? 1 : -1).concat();

  }

  const sortByUserId = (arr, item) => {


    const id = sortdata.findIndex(x => x.key === 'userId')
    let sortArray = sortdata.concat();

    if ( sortdata[id].sort === 'default') {
      sortArray[id].sort = 'asc';
    } else if ( sortdata[id].sort === 'desc') { 
      sortArray[id].sort = 'asc';
    } else { 
      sortArray[id].sort = 'desc';
    }
    
    setSortData(sortArray);
    
    if ( sortArray[id].sort === 'asc' ) {
      return arr.sort((a, b) => a.userId > b.userId ? 1 : -1).concat();
    } 

    return arr.sort((a, b) => a.userId < b.userId ? 1 : -1).concat();
  }

  const sortByAbc = (arr) => {


    const id = sortdata.findIndex(x => x.key === 'title')
    let sortArray = sortdata.concat();

    if ( sortdata[id].sort === 'default') {
      sortArray[id].sort = 'asc';
    } else if ( sortdata[id].sort === 'desc') { 
      sortArray[id].sort = 'asc';
    } else { 
      sortArray[id].sort = 'desc';
    }
    
    setSortData(sortArray);
    
    if ( sortArray[id].sort === 'asc' ) {
      return arr.sort((a, b) => a.title > b.title ? 1 : -1).concat();
    } 
    return arr.sort((a, b) => a.title < b.title ? 1 : -1).concat();
  }

  const handleSort = (sortTitle) => {
    console.log(sortTitle);
    
    switch (sortTitle) {
      case 'id':
        setData(sortById(data, sortTitle));
        break;

      case 'userId':
        setData(sortByUserId(data, sortTitle));
        break;

      case 'title':
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
        tableHead={sortdata}
      />

    </div>
  );
}

export default App;
