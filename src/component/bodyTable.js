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

        <input 
          type="checkbox"
          name="checkbox"
          checked={data.completed}
        />

      </div>
    );
  }  

  return (
    <div className="body">
      {console.log(data)}

      {data.map((item, index) => 
        <Item data={item} />
      )}

    </div>
  );
}

export default BodyTable;
