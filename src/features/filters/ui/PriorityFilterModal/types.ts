import { TodoPriority } from '../../../todos/types/TodoQueryParams';

export interface PriorityFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPriority: TodoPriority;
  onSelectPriority: (priority: TodoPriority) => void;
}
