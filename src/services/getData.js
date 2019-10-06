const getData = (startItem = 0, limitItems = 5, setData) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos?_start=${startItem}&_limit=${limitItems}`)
        .then( response => response.json() )
        .then(json =>  setData(json))
        .catch(error => {
            alert(error);
        });
}

export default getData;
