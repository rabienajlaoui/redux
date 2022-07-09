import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import Task from './Task';

const Listtask = () => {
  const [statu, setstatu] = useState("all");
  const list = useSelector((state) => state.todo.taskList);
  return (
    <div>
        <div className='buttons'>
        <Button variant="info" onClick={() => setstatu("all")} >all</Button>{' '}
        <Button variant="secondary" onClick={() => setstatu("done")} >done</Button>{' '}
        <Button variant="danger" onClick={() => setstatu("undone")} >undone</Button>{' '}
        </div>

        {statu === "all"
          ? list.map((task) => (
              <Task
                desc={task.desc}
                id={task.id}
                done={task.done}
              />
            ))
          : statu === "done"
          ? list.filter((task) => task.done).map((task) => (
                <Task
                desc={task.desc}
                id={task.id}
                done={task.done}
                />
              ))
          : list.filter((task) => !task.done).map((task) => (
                <Task
                desc={task.desc}
                id={task.id}
                done={task.done}
                />
              ))}

    </div>
  )
}

export default Listtask