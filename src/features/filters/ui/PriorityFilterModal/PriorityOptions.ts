import { TodoPriority } from '../../../todos/types/TodoQueryParams';

export const PRIORITY_OPTIONS: { label: string; priority: TodoPriority }[] = [
  { label: '전체', priority: 'all' },
  { label: '높음', priority: 'urgent' },
  { label: '중간', priority: 'normal' },
  { label: '낮음', priority: 'low' },
];
