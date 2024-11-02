import { Outlet } from 'react-router-dom';

const Container = () => {
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
};

export default Container;
