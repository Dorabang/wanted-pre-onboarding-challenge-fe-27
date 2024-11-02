export interface Todo {
  id: string;
  title: string;
  content: string;
  isComplete: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TodoState {
  title: string;
  content: string;
}
