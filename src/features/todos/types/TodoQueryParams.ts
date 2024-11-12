export type TodoPriority = 'all' | 'urgent' | 'normal' | 'low';
export type TodoSort = 'createdAt' | 'updatedAt' | 'priority';
export type TodoOrder = 'asc' | 'desc';

export interface TodoQueryParams {
  priorityFilter: TodoPriority;
  keyword?: string;
  sort: TodoSort;
  order: TodoOrder;
}
