import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

export const TodoList = ({taskList, setTaskList}) => {

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));

  }

  const handleCompleted = (id) => {
    setTaskList(taskList.map((task) => {
      if(id === task.id){
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    }))
  };

  return (
    <div className='todoList'>
      <div className="todos">
        {taskList.map((task, index) => (
        <div className={`todo ${task.completed ? "completed" : ""}`} key={index} >
          <div className="todoText">
            <span>{task.text}</span>
          </div>
          <div className="icons">
            <button className='fa-check' onClick={() => handleCompleted(task.id)}>
              <CheckIcon fontSize="small" />
            </button>
            <button className='fa-trash' onClick={() => handleDelete(task.id)}>
              <DeleteIcon fontSize="small" />
            </button>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
