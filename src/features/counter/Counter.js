import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(null);


  return (
    <div>
      <div>
        <input/>
        <input/>
        <button>Save</button>
        {isEdit && <button>Cancel</button>}
      </div>
       
    </div>
  );
}
