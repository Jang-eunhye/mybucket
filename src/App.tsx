import { Home } from './pages/Home'
import { Stats } from './pages/Stats'
import { Add } from './pages/Add'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  )
}

export default App
