import React from 'react';

import logo from '../../assets/images/logo-cria.png';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo CRIA" />
    </Container>
  );
}

export default Header;
