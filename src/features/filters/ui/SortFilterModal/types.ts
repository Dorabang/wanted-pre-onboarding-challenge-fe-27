import { TodoOrder, TodoSort } from '../../../todos/types/TodoQueryParams';

export interface SortFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  sortOrder: TodoOrder;
  selectedSort: TodoSort;
  onSelectSort: (newSort: TodoSort, newOrder: TodoOrder) => void;
}
