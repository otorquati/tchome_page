import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { Container } from './components/Container/Container';
import { HomePage } from './pages/HomePage/HomePage';
import { QualityToolsPage } from './pages/QualityToolsPage/QualityToolsPage';
import { TutorialsPage } from './pages/TutorialsPage/TutorialsPage'
import './App.css'

function App() {

  return (
   <div>
    <Router>
      <Navbar />
        <Container customClass="min_height">
          <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route path="/ferramentas" element={<QualityToolsPage />}/>
            <Route path="/tutorials" element={<TutorialsPage />}/>
            <Route path="/contact" element={<ContactPage />}/>
          </Routes>
        </Container>
    </Router>
   </div>
  )
}

export default App
