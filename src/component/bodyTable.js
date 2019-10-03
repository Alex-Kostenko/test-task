import React from 'react';

const BodyTable = ({ data, onSorting}) => {

  const Item = ({ data }) => {

    return (
      <tr className="user-info" >

        <td >
          UserId: {data.userId}
        </td>

        <td>
          Id: {data.id}
        </td>

        <td>
          Title: {data.title}
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
          <th onClick={() => onSorting('UserId')}>
            UserId
          </th>

          <th onClick={() => onSorting('Id')}>
            Id
          </th>

          <th onClick={() => onSorting('Title')}>
            Title
          </th>

          <th>
            Done
          </th>
        </tr>
      </thead> 
      <tbody> 
        {data.map((item) =>
          <Item data={item} key={item.id}/>
        )}
      </tbody>
      

    </table>
  );
}

export default BodyTable;
