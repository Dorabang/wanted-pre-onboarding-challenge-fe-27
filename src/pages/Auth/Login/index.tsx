import { useNavigate } from 'react-router-dom';

import { login } from '@/apis/auth';
import Form from '@/components/Form';
import useAuthForm from '@/hooks/useAuthForm';
import { authValidateCheck } from '@/utils/authValidateCheck';

const LoginPage = () => {
  const { data, error, handleChangeValue, handleSubmit } = useAuthForm();

  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const res = await login(data);
      const token = res.data.token;
      localStorage.setItem('token', token);

      navigate('/');
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const err = error as {
        response?: { data?: { details?: string }; status?: number };
      };
      if (err.response?.data?.details) {
        alert(err.response?.data?.details);
      }
    }
  };

  return (
    <div className="mx-auto flex max-w-[500px] flex-col gap-3 py-10">
      <h2 className="mb-10 text-center text-lg font-semibold">로그인</h2>
      <Form onSubmit={(e) => handleSubmit(e, onSubmit)}>
        <Form.Input
          label="이메일"
          name="email"
          type="text"
          value={data.email}
          error={error.email}
          onChange={handleChangeValue}
        />

        <Form.Input
          label="비밀번호"
          error={error.password}
          name="password"
          type="password"
          value={data.password}
          onChange={handleChangeValue}
        />

        <Form.SubmitButton
          disabled={!authValidateCheck(data.email, data.password)}
          className="my-5"
        >
          로그인
        </Form.SubmitButton>
      </Form>

      <hr />
      <div className="mx-auto pt-5">
        <a
          href="/auth/account"
          className="text-center text-sm text-gray-500 hover:underline"
        >
          회원가입하기
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
