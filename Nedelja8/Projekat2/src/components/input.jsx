import React, { useState } from 'react';




export const Input = ({updateUsers}) => {
  const [user, setUser] = useState({
    name: "",
    phone: ""
  });

  
    const submit = () => {

      if (!/^[+](\d){3}(\s)(\d){9}$/.test(user.number)) {
        return alert('Phone number must be +ххх ххххххххх');
      }
      updateUsers(user);}


    function handleChange(e) { setUser({
        name: e.target.value,
        number: user.number
      })}


      function handleChange2(e) { setUser({
        name: user.name,
        number: e.target.value
      })}



  return (
    <form>
      <label>
        Name
        <input
          type="text"
          name="firstName"
          placeholder="Name and Surname"
          value={user.name}
          onChange={handleChange}
          required="Field must not be empty"
         
        />
      </label>
      <label>
        Phone
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          value={user.phone}
          onChange={handleChange2}
         
          
        />
      </label>
      <input
          type="submit"
          value="Add"
          onClick={submit}
          
        />
    </form>
  );
}



export default Input
//const Input = (props) =>
//{
// const [count, setCount] = useState(0);
//    
//return (
//    <div className="input">
//         
//       <input type="text" placeholder="Name and Surname"/>
//       <input type="text" placeholder="Phone Number"/>
//   
//       <button onClick={e => alert(e.target.value)}>Send</button>
//         
//          </div>
//        
//  
//
//  );}
//
//  export default Input