// TodoSearch.tsx
import React, { useState } from 'react';

import Modal from '@/shared/ui/Modal';
import Form from '@/shared/ui/Form';
import Button from '@/shared/ui/Button';

interface SearchFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (keyword: string) => void;
}

const SearchFilterModal: React.FC<SearchFilterModalProps> = ({
  isOpen,
  onClose,
  onSearch,
}) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    onSearch(keyword);
    onClose();
  };

  return (
    <Modal id="todo-search" isOpen={isOpen} onClose={onClose}>
      <Modal.Header title="검색" />
      <Modal.Body>
        <Form className="p-4">
          <Form.Input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="검색어를 입력하세요"
          />
          <Button variant="contained" onClick={handleSearch}>
            검색
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SearchFilterModal;
