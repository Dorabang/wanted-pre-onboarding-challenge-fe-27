import { useQuery } from 'react-query';

import { getTodoById, getTodos } from '@/apis/todo';
import { useTodoKey, useTodosKey } from '@/constants/queryKey';

export const useTodos = () => {
  return useQuery([useTodosKey], () => getTodos());
};

export const useTodo = (id?: string) => {
  return useQuery([useTodoKey, id], () => getTodoById(id), {
    enabled: !!id,
  });
};
