import React, { useEffect, useState } from 'react';
import { getFooter } from '../utility/space-x-service';


export const Footer = () => {
    const [data,setData] = useState([])
   

    useEffect(() => {
        getFooter()
        .then(res => setData(res));
    }, );
    

    
        return(
        <footer>
            <b><p>{data.name}</p> <p> {data.orbit_type}</p> <p>{data.details}</p></b>
        </footer>
    )
        }
