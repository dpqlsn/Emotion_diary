import { Routes, Route } from 'react-router-dom'
import Home from '../src/pages/home'
import New from '../src/pages/new'
import Edit from '../src/pages/edit'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/Edit" element={<Edit />} />
    </Routes>
  )
}

export default App
