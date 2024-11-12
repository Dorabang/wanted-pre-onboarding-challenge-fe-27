import {
  TodoOrder,
  TodoPriority,
  TodoQueryParams,
  TodoSort,
} from '@/features/todos/types/TodoQueryParams';
import FilterButton from '../FilterButton';

interface FilterButtonGroupProps {
  filters: TodoQueryParams;
  onSortChange: (sort: TodoSort, order: TodoOrder) => void;
  onPrioritySelect: (priority: TodoPriority) => void;
  onResetFilters: () => void;
  onOpenModal: (type: 'priority' | 'sort' | 'search') => void;
}

const FilterButtonGroup = ({
  filters,
  onSortChange,
  onPrioritySelect,
  onResetFilters,
  onOpenModal,
}: FilterButtonGroupProps) => {
  const getPriorityLabel = (priority: TodoPriority) => {
    const labels = {
      all: '전체',
      urgent: '높음',
      normal: '중간',
      low: '낮음',
    };
    return labels[priority];
  };

  const getSortLabel = (sort: TodoSort, order: 'asc' | 'desc') => {
    const labels = {
      createdAt: '생성일',
      priority: '우선순위',
      updatedAt: '수정일',
    };
    const orderLabel = order === 'asc' ? '↑' : '↓';
    return `${labels[sort]} ${orderLabel}`;
  };

  return (
    <div className="flex gap-3">
      <FilterButton
        selected={filters.priorityFilter !== 'all'}
        selectedValue={getPriorityLabel(filters.priorityFilter)}
        onClick={() => onOpenModal('priority')}
        onReset={() => onPrioritySelect('all')}
      >
        {getPriorityLabel(filters.priorityFilter)}
      </FilterButton>
      <FilterButton
        selected={filters.sort !== 'createdAt' || filters.order !== 'desc'}
        selectedValue={getSortLabel(filters.sort, filters.order)}
        onClick={() => onOpenModal('sort')}
        onReset={() => onSortChange('createdAt', 'desc')}
      >
        {getSortLabel(filters.sort, filters.order)}
      </FilterButton>
      <FilterButton
        selected={!!filters.keyword}
        selectedValue={filters.keyword}
        onClick={() => onOpenModal('search')}
        onReset={onResetFilters}
      >
        {filters.keyword || filters.keyword !== '' ? filters.keyword : '검색'}
      </FilterButton>
    </div>
  );
};

export default FilterButtonGroup;
