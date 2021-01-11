import React from 'react';
// import { MdEdit, MdDeleteForever } from 'react-icons/md';

import { Container, Title, SubTitle, Button, Table } from './styles';

function Dashboard() {
  return (
    <Container>
      <Title>Lilian Dias</Title>
      <SubTitle>ADMIN</SubTitle>

      <Button type="submit" className="secondary-button">
        Sair
      </Button>

      <Table id="tabela-lista">
        <thead>
          <tr>
            <th>NOME</th>
            <th>TELEFONE</th>
            <th>EMAIL</th>
            <th>PERFIL</th>
            <th>STATUS</th>
            <th>DATA DE INATIVAÇÃO</th>
            <th>AÇÃO</th>
          </tr>
        </thead>

        <tbody id="tabela-lista-corpo" />
      </Table>
    </Container>
  );
}

export default Dashboard;
