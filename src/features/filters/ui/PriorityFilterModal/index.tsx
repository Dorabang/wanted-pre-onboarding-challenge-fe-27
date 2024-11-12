import React from 'react';

import { TodoPriority } from '@/features/todos/types/TodoQueryParams';
import Modal from '@/shared/ui/Modal';
import { PRIORITY_OPTIONS } from './PriorityOptions';
import { PriorityFilterModalProps } from './types';
import Button from '@/shared/ui/Button';

const PriorityFilterModal: React.FC<PriorityFilterModalProps> = ({
  isOpen,
  onClose,
  selectedPriority,
  onSelectPriority,
}) => {
  const handlePriorityChange = (priority: TodoPriority) => {
    onSelectPriority(priority);
    onClose();
  };

  return (
    <Modal id="priority-filter" isOpen={isOpen} onClose={onClose}>
      <Modal.Header title="우선순위 필터" />
      <Modal.Body>
        <div className="flex flex-col gap-3 p-4">
          {PRIORITY_OPTIONS.map(({ label, priority }) => (
            <Button
              variant="outlined"
              key={priority}
              onClick={() => handlePriorityChange(priority)}
              className={`${
                selectedPriority === priority
                  ? 'bg-sky-500 text-white hover:!bg-sky-500'
                  : ''
              }`}
            >
              {label}
            </Button>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PriorityFilterModal;
