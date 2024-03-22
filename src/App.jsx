
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Chatpage from './pages/chatpage'

function App() {


  return (
    <>
      <p>hellow</p>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/chat' element={<Chatpage/>}/>
      </Routes>
    </>
  )
}

export default App
