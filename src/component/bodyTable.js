import React from 'react';

const BodyTable = ({data}) => {

  const Item = ({data}) => {

    return (
      <div className="user-info">

        <div> 
          UserId: {data.userId}
        </div>

        <div> 
          Id: {data.id}
        </div>

        <div> 
          Title: {data.title}
        </div>

        <div> 
          Done:
          <input 
            type="checkbox"
            name="checkbox"
            checked={data.completed}
            readOnly
          />
        </div>

      </div>
    );
  };

  return (
    <div className="body">

      {data.map((item) =>
        <Item data={item} key={item.id}/>
      )}

    </div>
  );
}

export default BodyTable;
