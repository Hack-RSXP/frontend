import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCamera,
  FaAngleRight,
  FaStethoscope,
  FaCogs,
  FaPiggyBank,
} from 'react-icons/fa';

import { Container, Content } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>Selecione a sua área</strong>
      </header>
      <ul>
        <Link to="/topics" onClick={() => {}}>
          <Content>
            <div>
              <FaCamera size={40} color="#7159c1" />
              <strong>Lazer</strong>
            </div>
            <FaAngleRight size={40} color="#7159c1" />
          </Content>
        </Link>
        <Link to="/topics" onClick={() => {}}>
          <Content>
            <div>
              <FaStethoscope size={40} color="#7159c1" />
              <strong>Saúde</strong>
            </div>
            <FaAngleRight size={40} color="#7159c1" />
          </Content>
        </Link>
        <Link to="/topics" onClick={() => {}}>
          <Content>
            <div>
              <FaCogs size={40} color="#7159c1" />
              <strong>Ciência</strong>
            </div>
            <FaAngleRight size={40} color="#7159c1" />
          </Content>
        </Link>
        <Link to="/topics" onClick={() => {}}>
          <Content>
            <div>
              <FaPiggyBank size={40} color="#7159c1" />
              <strong>Finanças</strong>
            </div>
            <FaAngleRight size={40} color="#7159c1" />
          </Content>
        </Link>
      </ul>
    </Container>
  );
}
