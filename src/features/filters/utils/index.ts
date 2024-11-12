import { TodoPriority } from '@/features/todos/types/TodoQueryParams';

export const getPriorityLabel = (priority: TodoPriority) => {
  if (priority === 'urgent') return '높음';
  if (priority === 'normal') return '중간';
  if (priority === 'low') return '낮음';
};
