import React from 'react';
import { useHistory } from 'react-router-dom';

import Table from '../../components/Table';

import { Container, Title, SubTitle, Button } from './styles';

function Dashboard() {
  const history = useHistory();

  const head = {
    name: 'Nome',
    phone: 'Telefone',
    email: 'Email',
    userType: 'Perfil',
    status: 'Ativo',
    inactivityDate: 'Data de inativação',
    action: 'Ação',
  };

  const handleLogout = () => {
    localStorage.clear();

    history.push('/');
  };

  return (
    <Container>
      <Title>Dashboard</Title>
      <SubTitle>ADMIN</SubTitle>

      <Button onClick={handleLogout} type="submit" className="secondary-button">
        Sair
      </Button>

      <Table head={head} />
    </Container>
  );
}

export default Dashboard;
