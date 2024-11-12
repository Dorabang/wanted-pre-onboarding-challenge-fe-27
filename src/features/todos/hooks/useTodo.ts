import { useQuery } from 'react-query';

import { QUERY_KEYS } from '@/features/todos/constants';
import { getTodoById, getTodos } from '@/features/todos/api';
import { TodoQueryParams } from '../types/TodoQueryParams';

export const useTodos = (params: TodoQueryParams) => {
  return useQuery([QUERY_KEYS.TODO_LIST, params], () => getTodos(params));
};

export const useTodo = (id?: string) => {
  return useQuery([QUERY_KEYS.TODO_DETAIL, id], () => getTodoById(id), {
    enabled: !!id,
  });
};
