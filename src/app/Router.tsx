import { Routes, Route } from 'react-router-dom';

import ProtectedRoute from '@/features/auth/AuthProvider/ProtectedRoute';
import PublicRoute from '@/features/auth/AuthProvider/PublicRoute';
import useAuthRedirect from '@/features/auth/hooks/useAuthRedirect';
import Container from '@/widgets/Container';
import Header from '@/widgets/Header';
import LoginPage from '@/pages/Auth/Login';
import AccountPage from '@/pages/Auth/Account';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

function Router() {
  useAuthRedirect();
  return (
    <Routes>
      <Route element={<Container />}>
        {/* 토큰이 필요없는 페이지 */}
        <Route element={<PublicRoute />}>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/account" element={<AccountPage />} />
        </Route>

        {/* 토큰이 필요한 페이지 */}
        <Route element={<Header />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path=":id" element={<Home />} />
          </Route>
        </Route>

        {/* Route로 등록되어 있지 않은 페이지 진입 시 404 에러 페이지 리다이렉트 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
