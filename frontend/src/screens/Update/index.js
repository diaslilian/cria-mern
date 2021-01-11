import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import { BiArrowBack } from 'react-icons/bi';
import Input from '../../components/Input';

import api from '../../services/api';

import { Container } from './styles';

function Update() {
  const formRef = useRef(null);
  const [userType, setUserType] = useState(null);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (formRef && formRef.current) {
      api.get(`api/users/info/${id}`, {}).then((response) => {
        setUserType(response.data.userType);
        formRef.current.setData({
          name: response.data.name,
          phone: response.data.phone,
          email: response.data.email,
        });
      });
    }
  }, [formRef]);

  const handleUpdate = async ({ name, phone, email, password }) => {
    const userDataToUpdate = {
      name,
      phone,
      email,
    };

    if (password) userDataToUpdate.password = password;

    try {
      if (userType === 'admin') {
        await api.put(`/api/users/update/${id}`, userDataToUpdate);
        history.push('/dashboard');
      } else {
        await api.put(`/api/users/update-password/${id}`, userDataToUpdate);
      }

      alert(`Usuario atualizado com sucesso`);
    } catch (erro) {
      alert('Erro na atualizacao, tente novamente');
    }
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <div>
        <button onClick={handleGoBack} type="button">
          <BiArrowBack />
          Voltar
        </button>
      </div>

      <h2>Atualizar usuário</h2>

      <Form ref={formRef} onSubmit={handleUpdate}>
        <Input type="name" name="name" placeholder="Seu Nome" />
        <Input type="phone" name="phone" placeholder="Número de telefone" />
        <Input type="email" name="email" placeholder="Seu email" />
        <Input type="password" name="password" placeholder="Sua senha" />
        <button className="primary-button" type="submit">
          Atualizar
        </button>
      </Form>
    </Container>
  );
}

export default Update;
