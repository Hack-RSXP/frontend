import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

import { Container, Content } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>Selecione um tópico</strong>
      </header>
      <ul>
        <Link to="/curiosity" onClick={() => {}}>
          <Content>
            <div>
              <strong>Cinema</strong>
            </div>
            <FaAngleRight size={40} color="#7159c1" />
          </Content>
        </Link>
        <Link to="/info" onClick={() => {}}>
          <Content>
            <div>
              <strong>Música</strong>
            </div>
            <FaAngleRight size={40} color="#7159c1" />
          </Content>
        </Link>
        <Link to="/curiosity" onClick={() => {}}>
          <Content>
            <div>
              <strong>Fotografia</strong>
            </div>
            <FaAngleRight size={40} color="#7159c1" />
          </Content>
        </Link>
        <Link to="/curiosity" onClick={() => {}}>
          <Content>
            <div>
              <strong>Arte</strong>
            </div>
            <FaAngleRight size={40} color="#7159c1" />
          </Content>
        </Link>
        <Link to="/curiosity" onClick={() => {}}>
          <Content>
            <div>
              <strong>Viagens</strong>
            </div>
            <FaAngleRight size={40} color="#7159c1" />
          </Content>
        </Link>
      </ul>
    </Container>
  );
}
