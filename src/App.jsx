import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PodcastLibrary from './pages/PodcastLibrary';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<PodcastLibrary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;