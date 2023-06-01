import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Nav,
  HeaderNavList,
  HeaderNavItem,
  HeaderNavLink,
} from './SharedLayout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
const SharedLayot = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <HeaderNavList>
            <HeaderNavItem>
              <HeaderNavLink to="/">Home</HeaderNavLink>
            </HeaderNavItem>
            <HeaderNavItem>
              <HeaderNavLink to="/movies">Movies</HeaderNavLink>
            </HeaderNavItem>
          </HeaderNavList>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={ <Loader/>}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer></ToastContainer>
    </Container>
  );
};

export default SharedLayot;
