import React from 'react';

const BodyTable = ({ data, onSorting, tableHead}) => {

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
          {tableHead.map((item) => 
            <th key={item.label} onClick={() => onSorting(item.key)}>
              {item.label}
            </th>
          )}

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
