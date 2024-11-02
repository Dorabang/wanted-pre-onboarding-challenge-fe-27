import { Link } from 'react-router-dom';
import { Todo } from '../type';

const TodoList = ({ data }: { data: Todo }) => {
  return (
    <li className="flex items-center justify-between gap-3">
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
    </li>
  );
};

export default TodoList;
