import React from 'react';
import { useState, useEffect } from 'react';


const Navigation = ({getData}) => {

  const getCountPage = async (limit = 5) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos?_start=1`)
      .then(function (response) {
        return response.json();
      })
      .then( function (json) {
        setCountPage(json.length / limit)
        return json.length
      });
  };

  const [pagePagination, setPagePagination] = useState(1);
  const [startItem, setStartItem] = useState(0);
  const [limitItems, setLimitItems] = useState(5);
  const [countPage, setCountPage] = useState();

  useEffect(() => {
    getCountPage();
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
      setStartItem(page)
      setPagePagination(pagePagination - 1)
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
      getCountPage(e.target.value);
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

      {/* <div>
        MAX_PAGE: {countPage}
      </div> */}

      <Select />

    </div>
  );
}

export default Navigation;
