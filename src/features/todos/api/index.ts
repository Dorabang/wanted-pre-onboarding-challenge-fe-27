import axios from '@/service/axios';

import { TodoInput, TodoItem } from '@/entities/todos/model';

export const getTodos = async () => {
  return (await axios.get('/todos')).data.data as TodoItem[];
};

export const getTodoById = async (id?: string) => {
  if (!id) return;
  return (await axios.get(`/todos/${id}`)).data.data as TodoItem;
};

export const createTodo = async (data: TodoInput) => {
  return (await axios.post('/todos', data)).data.data as TodoItem;
};

export const updateTodo = async (id: string, data: TodoInput) => {
  return (await axios.put(`/todos/${id}`, data)).data.data as TodoItem;
};

export const deleteTodo = async (id: string) => {
  return (await axios.delete(`/todos/${id}`)).data.data as null;
};
