import React from 'react';
import { useState, useEffect } from 'react';
import getCountPage from '../requests/getCountPage';


const Navigation = ({getData}) => {

  const [pagePagination, setPagePagination] = useState(1);
  const [startItem, setStartItem] = useState(0);
  const [limitItems, setLimitItems] = useState(5);
  const [countPage, setCountPage] = useState();

  useEffect(() => {
    getCountPage(5, setCountPage);
  }, []);

  const handleNextClick = (page, limit) => {
    if (countPage > pagePagination) {
      setStartItem(page);
      setPagePagination(pagePagination + 1);
      getData(page, limit);
    }
  };

  const handlePrevClick = (page, limit) => {
    if (startItem > 0) {
      setStartItem(page);
      setPagePagination(pagePagination - 1);
      getData(page, limit);
    }
  };

  const Select = () => {
    const ARRAY_VALUES = [5,10,15,20,30,50]

    const handleChangeLimit = (e) => {
      setLimitItems(e.target.value)
      setPagePagination(1)
      setStartItem(0)
      getData(0, e.target.value);
      getCountPage(e.target.value, setCountPage);
    }

    return (
      <select 
        name="select" 
        value={limitItems} 
        onChange={(e) => handleChangeLimit(e, startItem)}
        className='nav-select'
      >
        {ARRAY_VALUES.map((item) =>
          <option value={item} key={item}>  {item}  </option>
        )}
      </select>
    )
  };

  return (
    <div className="navigation">

      {startItem > 0 &&
        <button
          onClick={() => handlePrevClick(
            (parseInt(startItem) - parseInt(limitItems))
            , limitItems
            )
          }
          name='Prev'
          className='nav-btn'
        >
          {pagePagination - 1}
        </button>
      }

      <button
        name='current'
        disabled
        className='nav-btn'
      >
        {pagePagination} 
      </button>

      {countPage > pagePagination && 
        <button 
          onClick={() => handleNextClick(
            (parseInt(startItem) + parseInt(limitItems))
            , limitItems)} 
          name='Next'
          className='nav-btn'
        >
          {pagePagination + 1}
        </button>
      }

      <div>
        MAX_PAGE: {Math.round(countPage)} <br/>
        Разрешение экрана: <b> {window.innerWidth} × {window.innerHeight} px.</b>
      </div>

      <Select />

    </div>
  );
}

export default Navigation;
