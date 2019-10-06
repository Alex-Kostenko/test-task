import React from 'react';

import getData from './services/getData';
import { TABLE_COLUMNS } from './data/data';
import CustomTable from './component/customTable';

import './App.css';

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
