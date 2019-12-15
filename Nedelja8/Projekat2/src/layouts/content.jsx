import React from 'react'
import Users from '../components/users'
import Input from '../components/input'




const Content = (props) => {
  return (
  
<>
<Input/>
  <Users data={props.data}/>

</>
  )
}

export default Content

