import { FormEvent, useState } from 'react';
import { QueryObserverResult } from 'react-query';

import Form from '@/shared/ui/Form';
import { createTodo } from '@/features/todos/api';
import { TodoPriority } from '../../types/TodoQueryParams';
import Button from '@/shared/ui/Button';
import PriorityFilterModal from '@/features/filters/ui/PriorityFilterModal';
import { getPriorityLabel } from '@/features/filters/utils';

const AddTodo = ({
  refetch,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetch: () => Promise<QueryObserverResult<any, any>>;
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState<TodoPriority>('normal');
  const [isPriorityModalOpen, setIsPriorityModalOpen] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createTodo({ title, content, priority });
      setTitle('');
      setContent('');
      setPriority('normal');
      refetch();
    } catch (error) {
      //   console.log('🚀 ~ handleSubmit ~ error:', error);
    }
  };

  return (
    <div className="w-full">
      <p className="py-5 text-center text-lg font-semibold">Todo 추가</p>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">우선순위</label>
          <Button
            type="button"
            variant="outlined"
            onClick={() => setIsPriorityModalOpen(true)}
          >
            {getPriorityLabel(priority)}
          </Button>
        </div>
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
      <PriorityFilterModal
        isOpen={isPriorityModalOpen}
        onClose={() => setIsPriorityModalOpen(false)}
        selectedPriority={priority}
        onSelectPriority={setPriority}
      />
    </div>
  );
};

export default AddTodo;
