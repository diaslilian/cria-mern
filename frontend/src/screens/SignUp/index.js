import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '../../services/api';

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
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleRegister() {
    const data = {
      name,
      phone,
      email,
      password,
      userType,
    };

    try {
      await api.post('api/users/register', data);
      alert(`Seu cadastro foi concluido com sucesso`);

      history.push('/');
    } catch (erro) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  return (
    <Container>
      <h1>CADASTRO</h1>

      <Form schema={schema} onSubmit={handleRegister}>
        <Option>
          <h2>Tipo de perfil</h2>
          <Select
            name="userType"
            id="userType"
            options={options}
            value={userType}
            onChange={(event) => setUserType(event.target.value)}
          />
        </Option>

        <Input
          type="name"
          name="name"
          placeholder="Seu Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type="phone"
          name="phone"
          placeholder="Número de telefone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <Input
          type="email"
          name="email"
          placeholder="Seu email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Sua senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
