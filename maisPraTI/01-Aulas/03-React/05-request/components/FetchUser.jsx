import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchUser = () => {
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(true);
  const [mensagem, setMensagem] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const setUsers = async () => {
    try {
      const response = await axios.post(
        'http://jsonplaceholder.typicode.com/posts',
        newUser,
      );
      console.log(response);
    } catch (erro) {
      setError(erro.message);
    }
  };

  return (
    <div>
      <form action="">
        <input type="text" />
      </form>
    </div>
  );
};

export default FetchUser;
