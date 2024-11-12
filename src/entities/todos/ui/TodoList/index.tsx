import { Link } from 'react-router-dom';

import { TodoItem } from '@/entities/todos/model';
import Tag from '@/features/todos/ui/Tag';

const TodoList = ({ data }: { data: TodoItem }) => {
  return (
    <div className="flex items-center justify-between gap-3">
      <Tag priority={data.priority} />
      <p className="flex-grow">
        <Link to={`/${data.id}`} className="inline-block w-full py-3">
          {data.title}
          {data.createdAt !== data.updatedAt && (
            <span className="pl-1 text-sm text-gray-400">{'(편집됨)'}</span>
          )}
        </Link>
      </p>

      <span className="pl-3 text-sm text-gray-400">
        {new Date(data.createdAt).toLocaleDateString()}
      </span>
    </div>
  );
};

export default TodoList;
