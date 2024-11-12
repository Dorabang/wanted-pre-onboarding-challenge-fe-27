import React from 'react';

import { SORT_OPTIONS } from './sortOptions';
import Modal from '@/shared/ui/Modal';
import { SortFilterModalProps } from './types';
import { TodoSort } from '../../../todos/types/TodoQueryParams';
import Button from '@/shared/ui/Button';

const SortFilterModal: React.FC<SortFilterModalProps> = ({
  isOpen,
  onClose,
  sortOrder,
  selectedSort,
  onSelectSort,
}) => {
  const handleSortChange = (sort: TodoSort) => {
    if (selectedSort === sort) {
      onSelectSort(sort, sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      onSelectSort(sort, 'desc');
    }
  };

  return (
    <Modal id="sort-filter" isOpen={isOpen} onClose={onClose}>
      <Modal.Header title="정렬 기준 선택" />
      <Modal.Body>
        <div className="flex flex-col gap-3 p-4">
          {SORT_OPTIONS.map(({ label, sort }) => (
            <Button
              key={sort}
              variant="text"
              onClick={() => handleSortChange(sort)}
              className={`w-full rounded border p-2 text-sm ${selectedSort === sort ? 'border-sky-400 text-sky-500' : ''}`}
            >
              {label}
              {selectedSort === sort && (sortOrder === 'asc' ? '↑' : '↓')}
            </Button>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SortFilterModal;
