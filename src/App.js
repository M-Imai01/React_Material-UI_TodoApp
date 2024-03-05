import './App.css';
import {Title} from "../src/components/Title";
import {InputForm} from "../src/components/InputForm";
import { TodoList } from './components/TodoList';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
