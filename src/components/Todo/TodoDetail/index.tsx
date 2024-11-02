import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useTodo } from '@/hooks/queries/useTodo';
import Form from '@/components/Form';
import { TodoState } from '../type';
import { deleteTodo, updateTodo } from '@/apis/todo';
import Button from '@/components/common/Button';

const TodoDetail = () => {
  const { id } = useParams();
  const { data: todo, isLoading, refetch } = useTodo(id);
  const [edit, setEdit] = useState<boolean>(false);
  const [updatedTodo, setUpdatedTodo] = useState<TodoState>({
    title: todo?.title ?? '',
    content: todo?.content ?? '',
  });

  useEffect(() => {
    if (todo) {
      setUpdatedTodo({ title: todo.title, content: todo.content });
    }
    setEdit(false);
  }, [id, todo]);

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
      setEdit(false);
      setUpdatedTodo({ title: '', content: '' });
    } catch (error) {
      console.log('🚀 ~ handleUpdateTodo ~ error:', error);
    }
  };

  const handleDeleteTodo = async () => {
    if (!todo) return;

    const ok = confirm('해당 할 일을 삭제하시겠습니까?');
    if (ok) {
      await deleteTodo(todo.id);
      refetch();
      setEdit(false);
    }
    return;
  };

  if (!todo) return null;

  if (isLoading) return <div>loading...</div>;

  if (edit)
    return (
      <>
        <h3 className="py-5 text-center text-lg font-semibold">TodoDetails</h3>

        <Form onSubmit={(e) => handleUpdateTodo(e)}>
          <Form.Input
            required
            label="제목"
            name="title"
            value={updatedTodo.title}
            onChange={(e) => handleChangeValue(e)}
          />
          <Form.TextArea
            required
            label="내용"
            name="content"
            value={updatedTodo.content}
            onChange={(e) => handleChangeValue(e)}
          />
          <div className="flex items-center justify-between gap-3 pt-3">
            <Form.SubmitButton>수정</Form.SubmitButton>
            <Form.ResetButton onClick={() => setEdit(false)}>
              취소
            </Form.ResetButton>
          </div>
        </Form>
      </>
    );

  return (
    <div>
      <h3 className="py-5 text-center text-lg font-semibold">TodoDetails</h3>
      <Form>
        <Form.Input value={todo.title} label="제목" view />
        <Form.TextArea label="내용" value={todo.content} view />
        <div className="flex gap-3 pt-3">
          <Button variant="text" onClick={() => setEdit(true)}>
            수정
          </Button>
          <Button variant="text" onClick={handleDeleteTodo}>
            삭제
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default TodoDetail;
