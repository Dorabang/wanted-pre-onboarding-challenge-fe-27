import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useTodos } from '@/features/todos/hooks/useTodo';
import TodoList from '@/entities/todos/ui/TodoList';
import AddTodo from '@/features/todos/ui/AddTodo';
import Button from '@/shared/Button';
import TodoDetailPage from '../TodoDetailPage';

const TodoPage = () => {
  const { id } = useParams();
  const [addTodo, setAddTodo] = useState(false);
  const { data: todos, refetch, isLoading } = useTodos();

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
