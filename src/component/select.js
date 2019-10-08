import React from 'react';

const Select = (props) => {
  const ARRAY_VALUES = [5, 10, 15, 20, 30, 50];
  const {
    setLimitItems,
    setPagePagination,
    setStartItem,
    getData,
    getCountPage,
    setCountPage,
    limitItems,
    startItem
   } = props;

  const handleChangeLimit = (e) => {
    setLimitItems(e.target.value);
    setPagePagination(1);
    setStartItem(0);
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

export default Select;
