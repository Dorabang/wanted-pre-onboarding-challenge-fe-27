import { TodoPriority } from '../../types/TodoQueryParams';

const Tag = ({ priority }: { priority: TodoPriority }) => {
  return (
    <span
      className={`inline-block rounded-md bg-gray-100 px-2 py-1 text-white ${priority === 'urgent' ? 'bg-red-500' : ''} ${priority === 'normal' ? 'bg-sky-500' : ''} ${priority === 'low' ? 'bg-green-500' : ''} `}
    >
      {priority === 'urgent' && '높음'}
      {priority === 'normal' && '중간'}
      {priority === 'low' && '낮음'}
    </span>
  );
};

export default Tag;
