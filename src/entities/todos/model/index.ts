import { TodoPriority } from '@/features/todos/types/TodoQueryParams';

export interface TodoItem {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  priority: TodoPriority;
}

export interface TodoInput {
  title: string;
  content: string;
  priority: TodoPriority;
}
