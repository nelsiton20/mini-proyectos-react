import { useState } from 'react';
import './App.css'
import Form from './components/Form/Form';
import TaskContainer from './components/TaskContainer/TaskContainer';
import { useGetLastId } from './hooks/useGetLastId';
import Header from './components/Header';

function App() { 
  const { lastId, setLastId } = useGetLastId();

  return (
    <>
      <Header />
      <TaskContainer lastId={lastId} />
      <Form lastId={lastId} setLastId={setLastId}/>
    </>
  )
}

export default App
