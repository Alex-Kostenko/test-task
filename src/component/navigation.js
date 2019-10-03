import React from 'react';
import { useState } from 'react';


const Navigation = ({getData}) => {

  const [pagePagination, setPagePagination] = useState(1);
  const [startItem, setStartItem] = useState(0);
  const [limitItems, setLimitItems] = useState(5);

  const handleNextClick = (page, limit) => {
    setStartItem(page)
    setPagePagination(pagePagination + 1)
    getData(page, limit);
  }

  const handlePrevClick = (page, limit) => {
    if (startItem > 0) {
      setStartItem(page)
      setPagePagination(pagePagination - 1)
      getData(page, limit);
    }
  }

  const Select = () => {
    const ARRAY_VALUES = [5,10,15,20,30,50]

    const handleChangeLimit = (e) => {
      setLimitItems(e.target.value)
      setPagePagination(1)
      setStartItem(0)
      getData(0, e.target.value);
    }

    return (
      <select 
        name="select" 
        value={limitItems} 
        onChange={(e) => handleChangeLimit(e, startItem)}
      >
        {ARRAY_VALUES.map((item)=>
          <option value={item} key={item}>  {item}  </option>
        )}
      </select>
    )
  }

  return (
    <div className="navigation">

      <button onClick={() => handlePrevClick((parseInt(startItem) - parseInt(limitItems)), limitItems)} name='Prev'> 
        {pagePagination - 1} 
      </button>

      <button name='current' disabled>
        {pagePagination} 
      </button>

      <button onClick={() => handleNextClick((parseInt(startItem) + parseInt(limitItems)), limitItems)} name='Next'>
        {pagePagination + 1} 
      </button>

      <br/>

      <Select />

    </div>
  );
}

export default Navigation;
