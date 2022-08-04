import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  add,
  edit,
  remove,
} from './listSlice';


export function List() {
  const list = useSelector(state => state.list.list)
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [form, setForm] = useState({name:'', price: ''})
  const handleAdd = () => {
    dispatch(add(form))
    setForm({name:'', price: ''})
  }
  const handleEdit = () => {
    dispatch(edit(form))
    setForm({name:'', price: ''})
    setIsEdit(false)
  }
  return (
    <div>
      <div>
        <input value={form.name} onChange={(event)=>setForm(prev=>({...prev,name:event.target.value}))}/>
        <input value={form.price} onChange={(event)=>setForm(prev=>({...prev,price:event.target.value}))}/>
        <button>Save</button>
        {isEdit && <button>Cancel</button>}
      </div>
       {list.map((item, key) => {
         return <div>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button onClick={() => {
                setIsEdit(true)
                setForm(item)
            }}>Edit</button>
            <button onClick={() => dispatch(remove(key))}>Remove</button>
         </div>
       })}
    </div>
  );
}
