import React from 'react';
const User = (props) => {

    let { data } = props;
    let { 
        name,
       
        phone
      }
                 

     = data;

    return (
      <div className="profile">
           
            <p>Name and Surname:{name}</p>
          
            <p>Phone number:{phone}</p>
           
            </div>
          


    );
}

export default User