// TodoUpdate.tsx
import { ChangeEvent, FormEvent, useState } from 'react';
import { useTodo } from '@/features/todos/hooks/useTodo';
import Form from '@/shared/Form';
import { updateTodo } from '@/features/todos/api';
import { TodoInput } from '@/entities/todos/model';

const UpdateTodo = ({
  id,
  onCancel,
  onUpdate,
}: {
  id: string;
  onCancel: () => void;
  onUpdate: () => void;
}) => {
  const { data: todo, isLoading, refetch } = useTodo(id);
  const [updatedTodo, setUpdatedTodo] = useState<TodoInput>({
    title: todo?.title ?? '',
    content: todo?.content ?? '',
  });

  const handleChangeValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = e;
    setUpdatedTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) return;
    try {
      await updateTodo(todo.id, updatedTodo);
      refetch();
      onUpdate();
    } catch (error) {
      console.error('🚀 ~ handleUpdateTodo ~ error:', error);
    }
  };

  if (isLoading) return <div>loading...</div>;

  return (
    <Form onSubmit={handleUpdateTodo}>
      <Form.Input
        required
        label="제목"
        name="title"
        value={updatedTodo.title}
        onChange={handleChangeValue}
      />
      <Form.TextArea
        required
        label="내용"
        name="content"
        value={updatedTodo.content}
        onChange={handleChangeValue}
      />
      <div className="flex items-center justify-between gap-3 pt-3">
        <Form.SubmitButton>수정</Form.SubmitButton>
        <Form.ResetButton onClick={onCancel}>취소</Form.ResetButton>
      </div>
    </Form>
  );
};

export default UpdateTodo;
