export type TodoPriority = 'urgent' | 'normal' | 'low';

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
}
