import React from 'react';
import style from '../styles/Dashboard.module.css';

const Dashboard = () => {
  console.log(style);
  return (
    <div>
      <h1 className={style.titulo}>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
