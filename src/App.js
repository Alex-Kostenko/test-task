import React from 'react';
import './App.css';
import getData from './requests/getData';
import {TABLE_COLUMNS} from './data/data';
import CustomTable from './component/customTable';

const App = () => {
  
  return (
    <CustomTable 
      arrayData={getData} 
      tableHead={TABLE_COLUMNS}
      onFilter={true}
    />
  );
}

export default App;
