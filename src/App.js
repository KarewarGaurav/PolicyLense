import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import './App.css'
import MovieDeatails from './Pages/MovieDetails'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/movie/:title" element={<MovieDeatails />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
