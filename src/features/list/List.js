import React, { useState, useRef } from 'react';
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
  const editKey = useRef(null)
  const handleCancel = () => {
    setForm({name:'', price: ''})
    setIsEdit(false)
  }
  const handleAdd = () => {
    dispatch(add(form))
    handleCancel()
  }
  const handleEdit = () => {
    dispatch(edit({item:form, key:editKey.current}))
    handleCancel()
  }
 
  return (
    <div>
      <div>
        <input value={form.name} onChange={(event)=>setForm(prev=>({...prev,name:event.target.value}))}/>
        <input value={form.price} onChange={(event)=>setForm(prev=>({...prev,price:event.target.value}))}/>
        <button onClick={isEdit ? handleEdit : handleAdd}>Save</button>
        {isEdit && <button onClick={handleCancel}>Cancel</button>}
      </div>
       {list.map((item, key) => {
         return <div key={item.name + key}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <button onClick={() => {
                setIsEdit(true)
                setForm(item)
                editKey.current = key
            }}>Edit</button>
            <button onClick={() => isEdit ? (handleCancel(), dispatch(remove(key))):dispatch(remove(key))}>Remove</button>
         </div>
       })}
    </div>
  );
}
