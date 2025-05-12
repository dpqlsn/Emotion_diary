import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/home'
import New from '../src/pages/new'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
    </Routes>
  )
}

export default App
