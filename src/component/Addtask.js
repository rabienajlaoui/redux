import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addtodo } from '../Actions';

const Addtask = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("")
  const handleChange = event => setText (event.target.value);
  const handleclick = () => {dispatch(
    addtodo({
       desc: text,
       id: uuidv4(),
       done: false,
    })
    )
    setText("");}

  return (
      <div  className='add'>
        <h1>Make your todo list</h1>
        <input value={text} onChange={handleChange} type="text" placeholder='Your new task'></input>
        <Button variant="success" onClick={handleclick}> Add </Button>{' '}
        </div>
        )
  }

export default Addtask