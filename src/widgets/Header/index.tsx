import { Outlet, useNavigate } from 'react-router-dom';

import Button from '@/shared/ui/Button';

const Header = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    const ok = confirm('로그아웃 하시겠습니까?');
    if (ok) {
      localStorage.removeItem('token');
      navigate('/auth/login');
    }
  };

  return (
    <>
      <header>
        <nav className="flex justify-end px-2 py-3">
          <Button variant="text" className="!w-[128px]" onClick={handleLogOut}>
            로그아웃
          </Button>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
