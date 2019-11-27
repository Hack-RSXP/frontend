import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Menu,
  Content,
  Button,
  Login,
  ImageContent,
  Image,
  Image2,
} from './styles';

export default function Home() {
  return (
    <Container>
      <Menu>
        <Content>
          <nav />

          <aside>
            <Link to="/">
              <Button type="button">Sobre</Button>
            </Link>
            <Link to="/">
              <Button type="button">Comunidade</Button>
            </Link>
            <Link to="/">
              <Button type="button">Contato</Button>
            </Link>
            <Login>
              <Link to="/dashboard">
                <button type="button">Entrar</button>
              </Link>
            </Login>
          </aside>
        </Content>
      </Menu>

      <ImageContent>
        <div>
          <h1>TecNear</h1>
          <h2>Lorem ipsum isun dolon</h2>
          <button type="button">Cadastre-se</button>
        </div>
        <Image src="https://trello-attachments.s3.amazonaws.com/5ddd199715a51a732e5dfdc3/5dde5498d031527a5ad607de/c10b3d88e9d65328117265631e1afa98/19164.png" />
        <Image2 src="https://trello-attachments.s3.amazonaws.com/5ddd199715a51a732e5dfdc3/5dde5498d031527a5ad607de/25a551f0f055789e68fecd5cf34bf8c7/banner.svg" />
      </ImageContent>
    </Container>
  );
}
