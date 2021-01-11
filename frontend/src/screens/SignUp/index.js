import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, Group, Option } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  phone: Yup.string().required('O telefone é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

const options = [
  { id: 'user', title: 'Usuário' },
  { id: 'admin', title: 'Administrador' },
];

function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <h1>CADASTRO</h1>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Option>
          <h2>Tipo de perfil</h2>
          <Select name="userType" id="userType" options={options} />
        </Option>

        <Input type="name" name="name" placeholder="Seu Nome" />
        <Input type="phone" name="phone" placeholder="Número de telefone" />
        <Input type="email" name="email" placeholder="Seu email" />
        <Input type="password" name="password" placeholder="Sua senha" />
        <Input
          type="password"
          name="password"
          placeholder="Confirme sua senha"
        />
        <Group>
          <Link to="/">Já tem conta?</Link>
          <button className="primary-button" type="submit">
            Confirmar
          </button>
        </Group>
      </Form>
    </Container>
  );
}

export default SignUp;
