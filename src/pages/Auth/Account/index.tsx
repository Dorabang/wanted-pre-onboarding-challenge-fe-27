import { createUser } from '@/apis/auth';
import Form from '@/components/Form';
import useAuthForm from '@/hooks/useAuthForm';
import { authValidateCheck } from '@/utils/authValidateCheck';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const { data, error, handleChangeValue, handleSubmit } = useAuthForm();
  const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      const res = await createUser(data);
      const token = res.data.token;
      localStorage.setItem('token', token);

      navigate('/');
    } catch (error) {
      const err = error as { response?: { data?: any; status?: number } };
      if (err.response) {
        alert(err.response.data.details);
      }
    }
  };

  return (
    <div className="mx-auto flex max-w-[500px] flex-col gap-3 py-10">
      <h2 className="mb-10 text-center text-lg font-semibold">회원가입</h2>
      <Form
        onSubmit={(e) => handleSubmit(e, onSubmit)}
        className="flex flex-col gap-3"
      >
        <Form.Input
          label="이메일"
          name="email"
          helpText="유효한 이메일을 입력해주세요 ex) example@email.com"
          type="text"
          value={data.email}
          error={error.email}
          onChange={handleChangeValue}
        />

        <Form.Input
          label="비밀번호"
          error={error.password}
          helpText="비밀번호는 8자 이상 입력해주세요"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChangeValue}
        />

        <Form.SubmitButton
          disabled={!authValidateCheck(data.email, data.password)}
          className="my-5"
        >
          회원가입
        </Form.SubmitButton>
      </Form>

      <hr />
      <div className="mx-auto pt-5">
        <a href="/auth/login" className="text-sm text-gray-500 hover:underline">
          로그인하기
        </a>
      </div>
    </div>
  );
};

export default AccountPage;
