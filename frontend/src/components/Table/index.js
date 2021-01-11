/* eslint-disable no-underscore-dangle */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';

import api from '../../services/api';
import { TOKEN_KEY } from '../../services/auth';

import { Wrapper } from './styles';

function Table() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState('');

  const userEmail = localStorage.getItem('email');

  useEffect(() => {
    api
      .get('api/users/info', {
        headers: {
          Authorization: userEmail,
        },
      })
      .then((response) => {
        setUsers(response.data);
      });
  }, [userEmail]);

  const handleDeleteUser = async (id) => {
    try {
      if (users._id !== id) {
        if (window.confirm('Tem certeza que quer deletar essa conta?')) {
          await api.delete(`/api/users/${id}`, {
            headers: { Authorization: TOKEN_KEY },
          });

          const filteredUsers = users.filter((user) => user._id !== id);
          setUsers(filteredUsers);
        }
      }
    } catch (erro) {
      setData({
        ...data,
        erro: 'Erro ao deletar usuario, tente novamente',
        success: '',
      });
    }
  };

  return (
    <Wrapper>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Email</th>
          <th>Perfil</th>
          <th>Ativo</th>
          <th>Data de inativação</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.userType}</td>
            <td>{user.status}</td>
            <td>{user.inactivityDate}</td>
            <td>
              <Link to={`/update/${user._id}`}>
                <MdEdit size={22} color="#000000" />
              </Link>
              <MdDelete
                size={22}
                color="#d82f43"
                onClick={() => handleDeleteUser(user._id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Wrapper>
  );
}

export default Table;
