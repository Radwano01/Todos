import React from 'react'
import { useDispatch } from 'react-redux'
import {removeTodos, setCheck} from "../redux/GlobalState"

const TodosCheck = ({id, title, check}) => {

    const dispatch = useDispatch()

    const handleCheck = ()=>{
        dispatch(setCheck(id))
    }
    const handleRemove = ()=>{
      dispatch(removeTodos(id))
    }
  return (
    <div className='inputItem'>
        <input type="checkbox" id={id}  checked={check} onChange={handleCheck}/>
        <label htmlFor={id}>{title}</label>
        <button onClick={handleRemove}>X</button>
    </div>
  )
}

export default TodosCheck