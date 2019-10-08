import React from 'react';

const BodyTable = ({ data, onSorting, tableHead }) => {
  const Body = ({array}) => {

      return (
        array.map((item) =>
          <Item data={item} key={item.id} />
        )
      )
  }

  const Head = ({array}) => {

    return (
      array.map((item) =>
        <th key={item.label} onClick={() => onSorting(item.key)}>
          {item.label}
        </th>
      )
    )
  }
  const Item = ({ data }) => {

    return (
      <tr className="user-info" >

        <td >
          {data.userId}
        </td>

        <td>
          {data.id}
        </td>

        <td>
          {data.title}
        </td>

        <td>
          Done:
          <input 
            type="checkbox"
            name="checkbox"
            checked={data.completed}
            readOnly
          />
        </td>

      </tr>
    );
  };

  return (
    <table className="body">
      <thead>
        <tr>
          <Head array={tableHead}/>
        </tr>
      </thead> 
      <tbody> 
        <Body array={data} />
      </tbody>
      

    </table>
  );
}

export default BodyTable;
