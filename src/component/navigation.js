import React from 'react';
import { useState, useEffect } from 'react';

import getCountPage from '../services/getCountPage';
import Select from './select';

const Navigation = ({ getData }) => {

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
        className='select-page'
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
        MAX_PAGE: {Math.round(countPage)} <br/>
        Разрешение экрана: <b> {window.innerWidth} × {window.innerHeight} px.</b>
      </div> */}

      <Select 
        setLimitItems={(item) => setLimitItems(item)}
        setPagePagination={(item) => setPagePagination(item)}
        setStartItem={(item) => setStartItem(item)}
        getData={(count, item) => getData(count, item)}
        getCountPage={(count, item) => getCountPage(count, item)}
        setCountPage={(item) => setCountPage(item)}
        setCountPage={(item) => setCountPage(item)}
        limitItems={limitItems}
        startItem={startItem}
      />

    </div>
  );
}

export default Navigation;
