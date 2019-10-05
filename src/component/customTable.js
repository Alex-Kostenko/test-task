import React from 'react';
import {useState, useEffect} from 'react';
import '../App.css';
import Navigation from './navigation';
import BodyTable from './bodyTable';


const CustomTable = ({arrayData, tableHead, onFilter = true}) => {

  const [data, setData] = useState([]);
  const [sortdata, setSortData] = useState(tableHead);

  useEffect(() => {
    arrayData(0, 5, setData)
  }, []);

  const sortTable = ( arr, sortTitle ) => {
    const id = sortdata.findIndex(x => x.key === sortTitle)

    let sortArray = sortdata.concat();

    if ( sortdata[id].sort === 'default') {
      sortArray[id].sort = 'asc';
    } else if ( sortdata[id].sort === 'desc') { 
      sortArray[id].sort = 'asc';
    } else { 
      sortArray[id].sort = 'desc';
    }
    
    setSortData(sortArray);

    switch (sortTitle) {
      case "title":
        if ( sortArray[id].sort === 'asc' ) {
          return arr.sort((a, b) => a.title > b.title ? 1 : -1).concat();
        } 
        return arr.sort((a, b) => a.title < b.title ? 1 : -1).concat();

      case "id":
        if ( sortArray[id].sort === 'asc' ) {
          return arr.sort((a, b) => a.id > b.id ? 1 : -1).concat();
        }
        return arr.sort((a, b) => a.id < b.id ? 1 : -1).concat();

      case "userId":
        if ( sortArray[id].sort === 'asc' ) {
          return arr.sort((a, b) => a.userId > b.userId ? 1 : -1).concat();
        } 
        return arr.sort((a, b) => a.userId < b.userId ? 1 : -1).concat();
    
      default:
        break;
    }

  }

  
  const handleSort = (sortTitle) => {
    if(onFilter === true) {
      setData(sortTable(data, sortTitle));
    }
  }
  
  return (
    <div className="App">
      
      <Navigation 
        getData={(page, limit) => arrayData(page, limit, setData)}
        onFilter={onFilter}
      />

      <BodyTable 
        data={data}
        onSorting={(sortTitle) => handleSort(sortTitle)}
        tableHead={sortdata}
      />

    </div>
  );
}

export default CustomTable;
