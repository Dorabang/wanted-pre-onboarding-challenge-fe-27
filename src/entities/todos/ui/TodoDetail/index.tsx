import { TodoItem } from '@/entities/todos/model';
import { getPriorityLabel } from '@/features/filters/utils';
import Button from '@/shared/ui/Button';
import Form from '@/shared/ui/Form';

const TodoDetail = ({
  todo,
  onEdit,
  onDelete,
}: {
  todo: TodoItem;
  onEdit: () => void;
  onDelete: () => void;
}) => {
  return (
    <div>
      <h3 className="py-5 text-center text-lg font-semibold">TodoDetails</h3>
      <Form>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">우선순위</label>
          <Button type="button" disabled variant="outlined">
            {getPriorityLabel(todo.priority)}
          </Button>
        </div>
        <Form.Input value={todo.title} label="제목" view />
        <Form.TextArea label="내용" value={todo.content} view />
        <div className="flex gap-3 pt-3">
          <Button variant="text" onClick={onEdit}>
            수정
          </Button>
          <Button variant="text" onClick={onDelete}>
            삭제
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default TodoDetail;
