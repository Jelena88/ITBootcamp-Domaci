import React from 'react';
import User from './user';




const Users = (props) => {
    let {data}=props;
    return (
        <div>
            {data.map(x => { return <User data={x} key={data.name} /> })}
        </div>
    )
}

export default Users;


