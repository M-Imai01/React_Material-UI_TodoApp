import React, { useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';

export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false
      }
    ]);
    setInputText("")
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className='inputForm'>
      <form className='form_flex' onSubmit={handleSubmit} >
        <input type='text' onChange={handleChange} value={inputText} />
        <button><AddBoxIcon fontSize="small" /></button>
      </form>
    </div>
  )
}
