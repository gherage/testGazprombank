import { Route, Routes } from 'react-router-dom';
import ServicesList from '../components/ServicesList/ServicesList';
import ServicePage from '../components/ServicePage/ServicePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ServicesList />} />
        <Route path="/services/:serviceId" element={<ServicePage />} />
      </Routes>
    </div>
  );
}

export default App;
