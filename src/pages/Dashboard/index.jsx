import React from 'react';
import { useLocation } from 'react-router-dom';
// import { Container } from './styles';

export function Dashboard() {
  const { data } = useLocation();
  console.log(data);
  return <h1>Dashboard</h1>;
}
