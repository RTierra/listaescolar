//import './App.css';
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Homepage} from './componentes/Homepage';
import NoFoundPage from './componentes/NoFoundPage';
import { PostProvider} from './context/postConext';

function App() {
  return (
    <div className='App'>
    <PostProvider>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='*' element={<NoFoundPage/>}/>
      </Routes>
    </PostProvider>
    </div>
  )
}

export default App
