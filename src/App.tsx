import { Home } from './pages/Home'
import { Empty } from './pages/Empty'
import { Filled } from './pages/Filled'
import { Stats } from './pages/Stats'
import { Add } from './pages/Add'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empty" element={<Empty />} />
        <Route path="/filled" element={<Filled />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  )
}

export default App
