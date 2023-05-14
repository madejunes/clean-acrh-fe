import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Front } from './ui/Front/Front'

function App() {

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path="/" element={<Front />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
