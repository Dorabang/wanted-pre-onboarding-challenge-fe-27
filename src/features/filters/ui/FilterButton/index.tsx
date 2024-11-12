import Button from '@/shared/ui/Button';
import { ReactNode } from 'react';

interface FilterButtonProps {
  children?: ReactNode;
  selected: boolean;
  selectedValue?: string;
  onClick: () => void;
  onReset: () => void;
}

const FilterButton = ({
  children,
  selected,
  onClick,
  onReset,
}: FilterButtonProps) => (
  <div className="relative">
    <Button
      onClick={onClick}
      variant="outlined"
      className={`!min-w-24 ${selected ? 'pr-6' : ''}`}
    >
      {children}
    </Button>
    {selected && (
      <button
        onClick={onReset}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500"
        title="필터 초기화"
      >
        ×
      </button>
    )}
  </div>
);

export default FilterButton;
