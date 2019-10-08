import React, { useState, useEffect } from 'react';

import Navigation from './navigation';
import BodyTable from './bodyTable';
import sortTable from '../services/sortService';

import '../App.css';


const CustomTable = ({arrayData, tableHead, onFilter = true}) => {

  const [data, setData] = useState([]);
  const [sortdata, setSortData] = useState(tableHead);

  useEffect(() => {
    arrayData(0, 5, setData)
  }, [arrayData]);

  const handleSort = (sortTitle) => {
    if(onFilter === true) {
      setData(sortTable(data, sortTitle, sortdata, setSortData));
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
