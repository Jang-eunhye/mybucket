import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Stats } from './pages/Stats'
import { Add } from './pages/Add'
import { BucketDetail } from './pages/BucketDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/add" element={<Add />} />
        <Route path="/bucket/:id" element={<BucketDetail />} />
      </Routes>
    </Router>
  )
}

export default App
