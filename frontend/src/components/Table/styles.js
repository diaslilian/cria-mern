import styled from 'styled-components';

export const Wrapper = styled.table`
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
