import React from 'react'

const CE = (props) => {
    const list = props.list;
  return (
    <>
        <div>
            {list.map((index,element)=>{
                return(
                    <>
                        <div>
                            <h1>{element.name}</h1>
                            <h1>{element.age}</h1>
                            <h1>{element.email}</h1>
                        </div>
                    </>
                )
            })}
        </div>
    </>
  )
}

export default CE