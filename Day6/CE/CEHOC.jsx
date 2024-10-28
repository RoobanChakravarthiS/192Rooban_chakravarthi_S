import React from 'react'
const HOC = (CE)=>{
    const updated=()=>{
        const newList = [{
            name:"rooban",
            age:19,
            email:"rooban@gmail.com"
        }]
        return(
            <CE list={newList}/>
        )
    };
    return updated;
}
export default HOC;