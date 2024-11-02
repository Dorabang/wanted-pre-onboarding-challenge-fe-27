import { Todo, TodoState } from '@/components/Todo/type';
import axios from '@/utils/axios';

export const getTodos = async () => {
  return (await axios.get('/todos')).data.data as Todo[];
};

export const getTodoById = async (id?: string) => {
  if (!id) return;
  return (await axios.get(`/todos/${id}`)).data.data as Todo;
};

export const createTodo = async (data: TodoState) => {
  return (await axios.post('/todos', data)).data.data as Todo;
};

export const updateTodo = async (id: string, data: TodoState) => {
  return (await axios.put(`/todos/${id}`, data)).data.data as Todo;
};

export const deleteTodo = async (id: string) => {
  return (await axios.delete(`/todos/${id}`)).data.data as null;
};
