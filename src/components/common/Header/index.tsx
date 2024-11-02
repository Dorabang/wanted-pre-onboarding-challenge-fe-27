import { Outlet } from 'react-router-dom';
import Button from '../Button';

const Header = () => {
  const handleLogOut = async () => {};
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
