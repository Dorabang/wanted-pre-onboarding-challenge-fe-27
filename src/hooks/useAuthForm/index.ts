import { useState, ChangeEvent, FormEvent } from 'react';
import { validateEmail, validatePassword } from '@/utils/authValidateCheck';

interface UseAuthFormReturn {
  data: { email: string; password: string };
  error: { email: string; password: string };
  handleChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>, callback: () => void) => void;
}

const useAuthForm = (): UseAuthFormReturn => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState({ email: '', password: '' });

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
    callback: () => void
  ) => {
    e.preventDefault();

    // 이메일 유효성 검사
    if (!validateEmail(data.email)) {
      setError((prev) => ({
        ...prev,
        email: '유효한 이메일 주소를 입력하세요.',
      }));
    } else {
      setError((prev) => ({ ...prev, email: '' }));
    }

    // 비밀번호 유효성 검사
    if (!validatePassword(data.password)) {
      setError((prev) => ({
        ...prev,
        password: '비밀번호는 최소 8자 이상이어야 합니다.',
      }));
    } else {
      setError((prev) => ({ ...prev, password: '' }));
    }

    // 에러가 없을 경우에만 콜백 실행
    if (validateEmail(data.email) && validatePassword(data.password)) {
      callback();
    }
  };

  return {
    data,
    error,
    handleChangeValue,
    handleSubmit,
  };
};

export default useAuthForm;
