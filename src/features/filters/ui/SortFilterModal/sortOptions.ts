import { TodoSort } from '../../../todos/types/TodoQueryParams';

export const SORT_OPTIONS: { label: string; sort: TodoSort }[] = [
  {
    label: '생성일',
    sort: 'createdAt',
  },
  {
    label: '수정일',
    sort: 'updatedAt',
  },
  {
    label: '우선순위',
    sort: 'priority',
  },
];
