import React, { useState, useEffect } from 'react';

import Navigation from './navigation';
import BodyTable from './bodyTable';

import '../App.css';

const CustomTable = ({arrayData, tableHead, onFilter = true}) => {

  const [data, setData] = useState([]);
  const [sortdata, setSortData] = useState(tableHead);

  useEffect(() => {
    arrayData(0, 5, setData)
  }, [arrayData]);

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

    if ( sortArray[id].sort === 'asc' ) {
      return arr.sort((a, b) => a[sortTitle] > b[sortTitle] ? 1 : -1).concat();
    } 
    return arr.sort((a, b) => a[sortTitle] < b[sortTitle] ? 1 : -1).concat();

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
