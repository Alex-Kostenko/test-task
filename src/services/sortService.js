
export default function sort(array, options, isDESC) {
  const result = array.concat();
  const property = options.property;
  options.type;

  switch (options.type) {
    case date:
      result.sort((a, b) => {
        if (a[property] === b[property]) {
          return 0;
        }
        return a[property] > b[property] ? 1 : -1;
      })
      break;
  
    default:
      break;
  }

  return isDESC ? result.reverse() : result;
}
