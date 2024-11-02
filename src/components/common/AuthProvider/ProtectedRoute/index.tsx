import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = localStorage.getItem('token');

  return !isAuthenticated ? <Navigate to="/auth/login" replace /> : <Outlet />;
};

export default ProtectedRoute;
