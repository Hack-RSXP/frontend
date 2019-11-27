import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  header {
    max-width: 940px;
    display: flex;
    align-items: center;
    justify-content: center;
    strong {
      color: #7159c1;
      font-weight: bold;
      font-size: 32px;
      margin: 0;
    }
  }
  ul {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Content = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 20px;
  height: 500px;
  border-radius: 4px;
  border: 5px solid #7159c1;
  background: rgba(255, 255, 255, 0.5);
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    p {
      margin-left: 10px;
      display: block;
      color: #7159c1;
      font-size: 20px;
      font-weight: bold;
      text-align: justify;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  span {
    display: block;
    margin-top: 3px;
    color: ${props => (props.available ? '#999' : '#666')};
  }
`;
