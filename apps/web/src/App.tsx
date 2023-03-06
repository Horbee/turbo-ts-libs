import './App.css'
import '@horbee/ui/dist/style.css'

import { useEffect, useState } from 'react'

import { useCounter } from '@horbee/core'
import { fetchAllTodos, fetchTodoById, Todo } from '@horbee/core/api'
import { MyButton, Text } from '@horbee/ui'

import reactLogo from './assets/react.svg'

const todosPromise = fetchAllTodos();
const todoPromise = fetchTodoById(5);

function App() {
  const { count, add } = useCounter(0);
  const [todos, setTodos] = useState<Todo[] | null>(null);

  useEffect(() => {
    todosPromise.then(setTodos);
    todoPromise.then(console.log);
  }, []);

  return (
    <div className="App">
      <MyButton />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Text label="Vite + React" />
      <div className="card">
        <button onClick={() => add()}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
