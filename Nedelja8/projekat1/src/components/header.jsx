import React, { useEffect, useState } from 'react';
import {getCompanyInfo} from '../utility/space-x-service'


export const Header = () => {
  const [data,setData] = useState([])
   

  useEffect(() => {
    getCompanyInfo()
      .then(res => setData(res));
  }, );
  

  
      return(
      <footer>
          <h1>{data.name}</h1>
      </footer>
  )
      }
