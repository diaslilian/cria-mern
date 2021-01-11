import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '../../services/api';
import { login } from '../../services/auth';

import { Container, Group, Wrapper } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogin() {
    try {
      const response = await api.post('api/users/login', { email, password });

      login(response.data.token);

      if (response.data.userType !== 'admin') {
        history.push(`/update/${response.data.id}`);
        return;
      }

      history.push('/dashboard');
    } catch (erro) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <Container>
      <h1>LOGIN</h1>

      <Form schema={schema} onSubmit={handleLogin}>
        <Input
          type="email"
          name="email"
          placeholder="seuemail@mail.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="********"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Group>
          <p>Esqueceu sua senha?</p>
          <button className="primary-button" type="submit">
            Confirmar
          </button>
        </Group>
      </Form>
      <Wrapper>
        <p />

        <h2>Nova Conta</h2>
        <Link to="/register" className="secondary-button">
          Cadastre-se
        </Link>
      </Wrapper>
    </Container>
  );
}

export default SignIn;
