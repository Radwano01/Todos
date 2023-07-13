import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from '../redux/GlobalState'

const Todos = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const handleSave = (e)=>{
        e.preventDefault()
        if(value){
            dispatch(addTodos({
            id : Date.now(),
            title: value,
            check: undefined
        }))
        setValue("")
        }else{
            alert("Put some Todos!")
        }

    }
  return (
    <div>
        <div className="todos-input">
            <form onSubmit={handleSave}>
                <input type="text" value={value} onChange={(e)=> setValue(e.target.value)}/>
                <button type='submit'>Add</button>
            </form>

        </div>

    </div>
  )
}

export default Todos