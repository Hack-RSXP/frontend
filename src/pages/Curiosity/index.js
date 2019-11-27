import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaShareAlt } from 'react-icons/fa';

import { Container, Content } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <strong>Tecnologia no cinema</strong>
      </header>
      <ul>
        <Link to="/text" onClick={() => {}}>
          <Content>
            <div>
              <p>
                Você sabia que o Netflix utiliza Javascript e outros frameworks
                como Node.js, React.js deixando suas listas de séries e filmes
                favoritos mais organizada e mostrando as tendências do cinema.
              </p>
            </div>
            <div>
              <FaAngleRight size={40} color="#7159c1" />
              <FaShareAlt size={32} color="#7159c1" />
            </div>
          </Content>
        </Link>
        <Link to="/text" onClick={() => {}}>
          <Content>
            <div>
              <p>
                Você sabia que a industria do cinema utiliza softwares de
                processamento de vídeo para efeitos especiais e animações que
                são produzidos por Desenvolvedores e Programadores.
              </p>
            </div>
            <div>
              <FaAngleRight size={40} color="#7159c1" />
              <FaShareAlt size={32} color="#7159c1" />
            </div>
          </Content>
        </Link>
        <Link to="/text" onClick={() => {}}>
          <Content>
            <div>
              <p>
                A industria do cinema é uma área que aumentou bastante o uso de
                tecnologias, com efeitos especiais e animações 3D, 4D e etc.
              </p>
            </div>
            <div>
              <FaAngleRight size={40} color="#7159c1" />
              <FaShareAlt size={32} color="#7159c1" />
            </div>
          </Content>
        </Link>
        <Link to="/text" onClick={() => {}}>
          <Content>
            <div>
              <p>
                A Netflix analisou e catalogou meticulosamente cada filme e
                série televisiva que se possa imaginar. Eles possuem uma
                quantidade imensa de informações sobre as produções de
                Hollywood.
              </p>
            </div>
            <div>
              <FaAngleRight size={40} color="#7159c1" />
              <FaShareAlt size={32} color="#7159c1" />
            </div>
          </Content>
        </Link>
      </ul>
    </Container>
  );
}
