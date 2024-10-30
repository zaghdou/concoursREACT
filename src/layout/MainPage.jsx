import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const items = [
  { key: 1, label: <Link to="/">Accueil</Link> },
  { key: 2, label: <Link to="/roulette">Roulette</Link> },
  { key: 3, label: <Link to="/reglement">Reglement</Link> },
  { key: 4, label: <Link to="/inscription">Inscription</Link> },
  { key: 5, label: <Link to="/contact">Contact</Link> },
];

function MainPage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Get the current route
  const location = useLocation();

  // Determine if the current route is '/roulette'
  const isRouletteRoute = location.pathname === '/roulette';

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div className="demo-logo"></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          className={isRouletteRoute ? 'main-game' : ''}
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
            maxWidth: 1000,
            width: '100%',
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      ></Footer>
    </Layout>
  );
}

export default MainPage;
