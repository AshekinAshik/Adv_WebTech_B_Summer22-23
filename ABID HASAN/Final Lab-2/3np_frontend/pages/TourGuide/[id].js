import React, { useEffect, useState } from "react";

const printObject =()=>{


    //tg id= route.query.id;
    const [name, setName] = useState([]);
    const [selectedName, setSelecetedName] = useState(null);

    useEffect(()=>{
        axios.get()
        .then(response => setName(response.data))
        .catch(error=> console.error(error));
    },[]);

    const handleClick = (name) =>{
        setSelecetedName(name);
    }
    return(
        <>
        <h1>Names List</h1>
        <ul>
            {name.map(name =>(
                <li key={name.id} onClick={() => handleClick(name)}>
                    {name.name}
                </li>
                
            ))}
        </ul>
        </>

    )
}

export default printObject;