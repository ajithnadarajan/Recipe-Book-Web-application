import React, { useState } from 'react'

export default function Some() {

    const [items,setItems]= useState([{
        id:1,
        checked:true,
        item:"vb"
    },
    {
        id:2,
        checked:false,
        item:"vbsa"
    }
]);
  const handleCheck = (ids) => {
    const listItems = items.map((item) => 
    item.id===ids ? {...item,checked:!item.checked} : item)
    setItems(listItems)
  }
const deleteee=(id)=>{
    const as=items.filter((item)=> item.id!==id)
    setItems(as)
}
  return (
    <div>
        <ul>
            {items.map((item) => (
            <li key={item.id}>
                <input type='checkbox'
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
                />
                <label>{item.item}</label>
                <button onClick={()=>deleteee(item.id)}>del</button>
            </li>
           ) )}
        </ul>
       
    </div>
  )
}
