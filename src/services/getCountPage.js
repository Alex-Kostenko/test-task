
const getCountPage = (limit = 5, setCountPage) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos?_start=1`)
        .then(function (response) {
            return response.json();
        })
        .then( function (json) {
            setCountPage(json.length / limit);
            return json.length;
        });
};

export default getCountPage;
