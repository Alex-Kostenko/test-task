const getSortData = (order = 'asc', sortTitle = 'title', setData, limitItems= '5') => {
  return fetch(`https://jsonplaceholder.typicode.com/todos?_sort=${sortTitle}&_order=${order}&_limit=${limitItems}`)
    .then(response => response.json())
    .then(json =>  setData(json))
    .catch(error => {
      alert(error);
    });
}

export default getSortData;
