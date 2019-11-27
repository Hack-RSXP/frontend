import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #b3aad3;
  min-height: 100vh;
`;

export const Menu = styled.div`
  padding: 0 30px;
  z-index: 1;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
    }
    a {
      font-weight: bold;
      color: #7159c1;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.button`
  background: rgba(255, 255, 255, 0);
  border: none;
  margin-left: 20px;
  font-size: 20px;
  color: #fff;
`;

export const Title = styled.h1`
  color: #ffff;
  font-size: 30px;
`;

export const Login = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #ffffff;
      margin-bottom: 10px;
    }
    a {
      display: block;
      margin-top: 10px;
      font-size: 12px;
      color: #ffffff;
    }
  }
  button {
    margin-left: 10px;
    height: 42px;
    width: 71px;
    background: #7159c1;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.2, '#7159c1')};
    }
  }
`;

export const ImageContent = styled.div`
  margin: 100px;
  div {
    display: flex;
    flex-direction: column;
    h1 {
      color: #fff;
      font-size: 35px;
      margin-bottom: 10px;
    }
    h2 {
      color: #fff;
      font-size: 20px;
      margin-bottom: 10px;
    }
    button {
      height: 42px;
      width: 140px;
      text-transform: uppercase;
      font-weight: bold;
      background: #7159c1;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.2, '#7159c1')};
      }
    }
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export const Image2 = styled.img`
  width: 70%;
  height: 60%;
  position: absolute;
  top: 15%;
  right: 0px;
  z-index: 0;
`;
