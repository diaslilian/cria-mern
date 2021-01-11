import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-top: 7rem;
`;

export const SubTitle = styled.span`
  font-weight: bold;
  margin-top: 2rem;
  color: var(--green);
`;

export const Button = styled.button`
  margin-left: 87%;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 2rem;

  td,
  th {
    border: 1px solid var(--light);
    padding: 20px;
  }

  tr:nth-child(even) {
    background-color: var(--white);
  }

  tr:hover {
    background-color: var(--green);
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: var(--black);
    color: var(--white);
  }
`;
