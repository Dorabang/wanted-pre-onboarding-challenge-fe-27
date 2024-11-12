import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useTodos } from '@/features/todos/hooks/useTodo';
import TodoList from '@/entities/todos/ui/TodoList';
import AddTodo from '@/features/todos/ui/AddTodo';
import Button from '@/shared/ui/Button';
import TodoDetailPage from '../TodoDetailPage';
import { useFilters } from '@/features/filters/hooks/useFilters';
import SortFilterModal from '@/features/filters/ui/SortFilterModal';
import SearchFilterModal from '@/features/filters/ui/SearchFilterModal';
import PriorityFilterModal from '@/features/filters/ui/PriorityFilterModal';
import FilterButtonGroup from '@/features/filters/ui/FilterButtonGroup';
import { TodoOrder, TodoPriority, TodoSort } from '../../types/TodoQueryParams';

const TodoPage = () => {
  const { id } = useParams();
  const {
    filters,
    isFilterModalOpen,
    setIsFilterModalOpen,
    handleFilterChange,
    handleResetFilters,
  } = useFilters();
  const [addTodo, setAddTodo] = useState(false);
  const { data: todos, refetch, isLoading } = useTodos(filters);

  const handleSortChange = (sort: TodoSort, order: TodoOrder) => {
    handleFilterChange('sort', sort);
    handleFilterChange('order', order);
  };

  const handlePrioritySelect = (priority: TodoPriority) => {
    handleFilterChange('priorityFilter', priority);
  };

  const handleOpenModal = (type: 'priority' | 'sort' | 'search') => {
    setIsFilterModalOpen(type, true);
  };

  return (
    <div className="mx-auto flex w-full max-w-[500px] flex-col justify-between gap-10 pb-20 pt-10">
      <ul className="flex w-full flex-col gap-3">
        <li className="flex items-center justify-between pb-5 text-center text-lg font-semibold">
          <span>Todo</span>
          <Link to="/">
            <Button
              onClick={() => setAddTodo(true)}
              variant="text"
              className="!w-[52px]"
            >
              +
            </Button>
          </Link>
        </li>
        <li className="flex gap-3">
          <FilterButtonGroup
            filters={filters}
            onSortChange={handleSortChange}
            onPrioritySelect={handlePrioritySelect}
            onResetFilters={handleResetFilters}
            onOpenModal={handleOpenModal}
          />
        </li>

        {/* Filter 모달 컴포넌트 */}
        <PriorityFilterModal
          isOpen={isFilterModalOpen.priority}
          onClose={() => setIsFilterModalOpen('priority', false)}
          selectedPriority={filters.priorityFilter}
          onSelectPriority={(priority) =>
            handleFilterChange('priorityFilter', priority)
          }
        />
        <SortFilterModal
          isOpen={isFilterModalOpen.sort}
          onClose={() => setIsFilterModalOpen('sort', false)}
          sortOrder={filters.order}
          selectedSort={filters.sort}
          onSelectSort={(sort, order) => {
            handleFilterChange('sort', sort);
            handleFilterChange('order', order);
          }}
        />
        <SearchFilterModal
          isOpen={isFilterModalOpen.search}
          onClose={() => setIsFilterModalOpen('search', false)}
          onSearch={(keyword) => handleFilterChange('keyword', keyword)}
        />

        {isLoading && <li className="text-center text-gray-400">loading...</li>}
        {!isLoading && (!todos || !todos.length) && (
          <li className="text-center text-gray-400">
            현재 작성된 투두 리스트가 없습니다.
          </li>
        )}
        {todos?.map((todo) => (
          <li key={todo.id} onClick={() => setAddTodo(false)}>
            <TodoList key={todo.id} data={todo} />
          </li>
        ))}
      </ul>

      {addTodo && <AddTodo refetch={refetch} />}

      {!addTodo && id && (
        <div className="w-full">
          <TodoDetailPage />
        </div>
      )}
    </div>
  );
};

export default TodoPage;
