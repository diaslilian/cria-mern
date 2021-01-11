import styled from 'styled-components';

export const Container = styled.div`
  padding: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
      padding: 1rem;
      margin: 1rem;
      border: 2px solid var(--gray);
      box-sizing: border-box;
      border-radius: 24.5px;
      width: 50vw;
      height: 2.6rem;
    }

    span {
      color: var(--red);
      align-self: flex-start;
      margin: 0 0 1rem 2rem;
      font-weight: bold;
    }
  }
`;

export const Option = styled.div`
  margin: 1rem;
  padding: 1rem 0;
  width: 49vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 1.2em;
    margin: 1rem 0;
  }

  select {
    width: 20%;
    height: 2rem;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 49vw;

  a {
    text-decoration: none;
    font-weight: bold;
    color: var(--green);
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;
