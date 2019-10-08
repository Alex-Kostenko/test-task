import React, { useState, useEffect } from 'react';

import Navigation from './navigation';
import BodyTable from './bodyTable';
import sortTable from '../services/sortService';

import '../App.css';


const CustomTable = ({arrayData, tableHead, onFilter = true}) => {

  const [data, setData] = useState([]);
  const [sortdata, setSortData] = useState(tableHead);
  const [limitOnPage, setLimitOnPage] = useState('5');

  useEffect(() => {
    arrayData(0, 5, setData);
  }, [arrayData]);

  const handleSort = (sortTitle) => {
    if(onFilter === true) {
      setData(sortTable(data, sortTitle, sortdata, setSortData, limitOnPage));
    }
  }

  const dataRedures = (page, limit, setData) => {
    arrayData(page, limit, setData);
    setLimitOnPage(limit);
  }

  return (
    <div className="App">

      <Navigation 
        getData={(page, limit) => dataRedures(page, limit, setData)}
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
