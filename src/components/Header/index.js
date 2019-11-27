import React from 'react';
import { Link } from 'react-router-dom';

// import logo from '~/assets/logo.svg';

import { Container, Content, Title, Profile } from './styles';

export default function Header() {
  function handleSignOut() {}

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <Title>TechNear</Title>
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Nome</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <Link to="/">
              <button onClick={handleSignOut} type="button">
                Sair
              </button>
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
