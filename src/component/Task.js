import React from 'react'
import { useDispatch } from 'react-redux';
import { deltodo,donetodo } from '../Actions';
import EditModal from './EditModal';

  const Task = ({desc,id,done}) => {
  const dispatch = useDispatch();

  return (
    <div className='task'>
      <div className='desc'>{desc}</div>
      <EditModal {...{desc,id,done}}/>
      <button className="btn btn-outline-danger" onClick={() => dispatch(deltodo(id))}>Delete task</button>
      <button className="btn btn-outline-success" onClick={() => dispatch(donetodo(id))}> {done ? "Completed Task" : "Uncompleted Task"} </button>
    </div>
  )
}
export default Task