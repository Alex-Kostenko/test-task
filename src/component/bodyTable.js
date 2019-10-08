import React from 'react';

const BodyTable = ({ data, onSorting, tableHead }) => {

  const Body = ({array}) => {

    const Item = ({ item }) => {
      return (
        Object.keys(item).map((itemSecond, i) => {
          return (
            <td key={i}>
              {typeof (item[itemSecond]) === 'boolean' ?
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={item[itemSecond]}
                  readOnly
                />
                :
                item[itemSecond]
              }
            </td>
          )
        })
      );
    };

    return (
      array.map((item, i) =>
        <tr className="user-info" key={i}>
          <Item item={item} />
        </tr>
    ));
  }

  const Head = ({array}) => {

    return (
      <tr>
        {array.map((item) =>
          <th key={item.label} onClick={() => onSorting(item.key)}>
            {item.label}
            {item.sort === 'asc' ? '↓' : item.sort === 'desc' ? '↑' : null}
          </th>
        )}
      </tr>
    )
  }

  return (
    <table className="body" cellspacing="0"
>
      <thead>
        <Head array={tableHead}/>
      </thead> 
      <tbody> 
        <Body array={data} />
      </tbody>
    </table>
  );
}

export default BodyTable;
