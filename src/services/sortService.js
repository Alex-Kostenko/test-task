
const DESC = 'desc';
const ASC = 'asc';

export default function sortTable(array, sortTitle, sortdata, setSortData) {
  const id = sortdata.findIndex(x => x.key === sortTitle)
  let options = sortdata.concat();
  let sort = options[id].sort;
  let type = options[id].type;

    if (sortdata[id].sort === 'default') {
      options[id].sort = ASC;
    } else if (sortdata[id].sort === DESC) { 
      options[id].sort = ASC;
    } else { 
      options[id].sort = DESC;
    }

  setSortData(options);

  let result=[];

  switch (type) {
    case 'number':
    case 'string':
      result = array.concat().sort((a, b) => 
        a[sortTitle] > b[sortTitle] ? 1 : -1
      );
      break;

    case 'boolean':
      result = array.concat().sort((a, b) => 
        a[sortTitle] - b[sortTitle]
      );
      break;

    case 'date':
      result = array.concat().sort((a, b) =>
        new Date(b[sortTitle]) - new Date(a[sortTitle])
      );

      break;

  
    default:
      alert('erros type')
      break;
  }

  return sort === ASC ? result.reverse() : result
}
