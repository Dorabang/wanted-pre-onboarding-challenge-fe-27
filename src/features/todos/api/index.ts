import axios from '@/service/axios';

import { TodoInput, TodoItem } from '@/entities/todos/model';
import { TodoQueryParams } from '../types/TodoQueryParams';

export const getTodos = async (params: TodoQueryParams) => {
  const query = new URLSearchParams(
    Object.entries(params)
      .filter(([key, value]) => {
        // priorityFilter가 'all'인 경우에는 필터링해서 쿼리에 추가하지 않음
        if (key === 'priorityFilter' && value === 'all') return false;
        return value !== undefined;
      })
      .map(([key, value]) => [key, value.toString()])
  );

  return (await axios.get(`/todos${'?' + query.toString()}`)).data
    .data as TodoItem[];
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
