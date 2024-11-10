import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useTodo } from '@/features/todos/hooks/useTodo';
import { deleteTodo } from '@/features/todos/api';
import UpdateTodo from '@/features/todos/ui/UpdateTodo';
import TodoDetail from '@/entities/todos/ui/TodoDetail';

const TodoDetailPage = () => {
  const { id } = useParams();
  const { data: todo, isLoading } = useTodo(id);
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => setIsEdit(true);
  const handleCancelEdit = () => setIsEdit(false);

  const handleDelete = async () => {
    if (!todo) return;
    const ok = confirm('해당 할 일을 삭제하시겠습니까?');
    if (ok) {
      await deleteTodo(todo.id);
    }
  };

  if (!id) return null;

  if (!todo) return <div>Not Found</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {isEdit ? (
        <UpdateTodo
          id={id}
          onCancel={handleCancelEdit}
          onUpdate={handleCancelEdit}
        />
      ) : (
        <TodoDetail todo={todo} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default TodoDetailPage;
