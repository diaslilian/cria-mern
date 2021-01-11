import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import { Container, Group, Wrapper } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <h1>LOGIN</h1>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="seuemail@mail.com" />
        <Input type="password" name="password" placeholder="********" />

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
