import React from 'react';

const ARRAY_VALUES = [5, 10, 15, 20, 30, 50];

const Select = (props) => { 
  const {
    setLimitItems,
    setPagePagination,
    setStartItem,
    getData,
    getCountPage,
    setCountPage,
    limitItems,
   } = props;

  const handleChangeLimit = ({ target }) => {
    setLimitItems(target.value);
    setPagePagination(1);
    setStartItem(0);
    getData(0, target.value);
    getCountPage(target.value, setCountPage);
  }

  return (
    <select
      name="select"
      value={limitItems}
      onChange={handleChangeLimit}
      className='nav-select'
    >
      {ARRAY_VALUES.map((item) =>
        <option 
        value={item}
        key={item}>
          {item}
        </option>
      )}
    </select>
  )
};

export default Select;
