import { useQuery } from 'react-query';

import { QUERY_KEYS } from '@/features/todos/constants';
import { getTodoById, getTodos } from '@/features/todos/api';

export const useTodos = () => {
  return useQuery([QUERY_KEYS.TODO_LIST], () => getTodos());
};

export const useTodo = (id?: string) => {
  return useQuery([QUERY_KEYS.TODO_DETAIL, id], () => getTodoById(id), {
    enabled: !!id,
  });
};
