import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      if (!localStorage.getItem('token')) {
        alert('로그인 세션이 만료되었습니다. 다시 로그인 해주세요.');
        navigate('/auth/login');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate]);

  return null;
};

export default useAuthRedirect;
