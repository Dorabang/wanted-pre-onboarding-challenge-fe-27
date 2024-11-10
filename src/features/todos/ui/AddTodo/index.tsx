import { FormEvent, useState } from 'react';
import { QueryObserverResult } from 'react-query';

import Form from '@/shared/Form';
import { createTodo } from '@/features/todos/api';

const AddTodo = ({
  refetch,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetch: () => Promise<QueryObserverResult<any, any>>;
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createTodo({ title, content });
      setTitle('');
      setContent('');
      refetch();
    } catch (error) {
      //   console.log('🚀 ~ handleSubmit ~ error:', error);
    }
  };

  return (
    <div className="w-full">
      <p className="py-5 text-center text-lg font-semibold">Todo 추가</p>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Input
          label="제목"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.TextArea
          label="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Form.SubmitButton disabled={!title || !content}>
          추가
        </Form.SubmitButton>
      </Form>
    </div>
  );
};

export default AddTodo;
