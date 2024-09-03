import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
function App() {
  return (
    <div className='container'>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quiz' element={<QuizPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
