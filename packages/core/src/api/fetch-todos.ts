import axios from 'axios'

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export async function fetchAllTodos(): Promise<Todo[]> {
  const { data } = await axios.get<Todo[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return data;
}

export async function fetchTodoById(id: number): Promise<Todo> {
  const { data } = await axios.get<Todo>(
    "https://jsonplaceholder.typicode.com/todos/" + id
  );

  return data;
}
