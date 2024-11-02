import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useTodos } from '@/hooks/queries/useTodo';
import TodoList from '@/components/Todo/TodoList';
import TodoDetail from '@/components/Todo/TodoDetail';
import InputTodo from '@/components/Todo/InputTodo';
import Button from '@/components/common/Button';

const Home = () => {
  const { id } = useParams();
  const [addTodo, setAddTodo] = useState(false);

  const { data: todos, refetch, isSuccess } = useTodos();

  return (
    <div className="mx-auto flex w-full max-w-[500px] flex-col justify-between gap-10 pb-20 pt-10">
      <ul className="flex w-full flex-col gap-3">
        <li className="flex justify-between pb-5 text-center text-lg font-semibold">
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
        {!isSuccess && (
          <li className="text-center text-gray-400">loading...</li>
        )}
        {!todos ||
          (!todos.length && (
            <li className="text-center text-gray-400">
              현재 작성된 투두 리스트가 없습니다.
            </li>
          ))}
        {todos?.map((todo) => (
          <li key={todo.id} onClick={() => setAddTodo(false)}>
            <TodoList key={todo.id} data={todo} />
          </li>
        ))}
      </ul>

      {addTodo && <InputTodo refetch={refetch} />}

      {!addTodo && id && (
        <div className="w-full">
          <TodoDetail />
        </div>
      )}
    </div>
  );
};

export default Home;
