import React from 'react';
import { useLocation } from 'react-router-dom';

// import { Container } from './styles';

export function Dashboard() {
  const location = useLocation();

  console.log(location);

  return <h1>Dashboard</h1>;
}
