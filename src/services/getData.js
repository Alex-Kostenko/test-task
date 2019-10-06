const getData = async (startItem = 0, limitItems = 5, setData) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${startItem}&_limit=${limitItems}`)
        .then(function (response) {
        return response.json();
        })
        .then(function (json) {
        setData(json)
        });
}

export default getData;
