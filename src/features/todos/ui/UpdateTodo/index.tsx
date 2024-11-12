// TodoUpdate.tsx
import { ChangeEvent, FormEvent, useState } from 'react';
import { useTodo } from '@/features/todos/hooks/useTodo';
import Form from '@/shared/ui/Form';
import { updateTodo } from '@/features/todos/api';
import { TodoInput } from '@/entities/todos/model';
import Button from '@/shared/ui/Button';
import PriorityFilterModal from '@/features/filters/ui/PriorityFilterModal';

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
    priority: todo?.priority ?? 'normal',
  });
  const [isPriorityModalOpen, setIsPriorityModalOpen] = useState(false);

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
      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium">우선순위</label>
        <Button
          type="button"
          variant="outlined"
          onClick={() => setIsPriorityModalOpen(true)}
        >
          {updatedTodo.priority === 'urgent' && '높음'}
          {updatedTodo.priority === 'normal' && '중간'}
          {updatedTodo.priority === 'low' && '낮음'}
        </Button>
      </div>
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
      <PriorityFilterModal
        isOpen={isPriorityModalOpen}
        onClose={() => setIsPriorityModalOpen(false)}
        selectedPriority={updatedTodo.priority}
        onSelectPriority={(priority) =>
          setUpdatedTodo((prev) => ({ ...prev, priority }))
        }
      />
    </Form>
  );
};

export default UpdateTodo;
