import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UserList = () => {

  const style = {
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gap: '1rem',
    }
  }

  const [listOfUser, setlistOfUser] = useState([]);

  const fetchUser = async () => {
    const options = {
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
    };

    try {
      const response = await axios.request(options);
      setlistOfUser(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className='user-list'>
      <h1 className='header' >List of Users</h1>
      <ul style={style.grid}>
        {listOfUser.map(user => (
          <li key={user.id}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
