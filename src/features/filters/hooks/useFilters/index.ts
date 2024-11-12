import { useCallback, useState } from 'react';

import { TodoQueryParams } from '@/features/todos/types/TodoQueryParams';
import { FilterModalState } from './types';

export const useFilters = () => {
  const [isFilterModalOpen, setFilterModalOpen] = useState<FilterModalState>({
    priority: false,
    sort: false,
    search: false,
  });

  const [filters, setFilters] = useState<TodoQueryParams>({
    priorityFilter: 'all',
    keyword: '',
    sort: 'createdAt',
    order: 'desc',
  });

  const setIsFilterModalOpen = (
    modal: keyof FilterModalState,
    isOpen: boolean
  ) => {
    setFilterModalOpen((prev) => ({ ...prev, [modal]: isOpen }));
  };

  const handleFilterChange = useCallback(
    (
      key: keyof TodoQueryParams,
      value: TodoQueryParams[keyof TodoQueryParams]
    ) => {
      setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
    },
    []
  );
  const handleResetFilters = () =>
    setFilters({
      priorityFilter: 'all',
      keyword: '',
      sort: 'createdAt',
      order: 'desc',
    });

  return {
    filters,
    isFilterModalOpen,
    setIsFilterModalOpen,
    handleFilterChange,
    handleResetFilters,
  };
};
