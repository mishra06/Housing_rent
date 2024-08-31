import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Wishlist from './components/Layout/Wishlist';
import Layout from './components/Layout/Layout';
import Screen from './screen/Screen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Screen />}>
            <Route path="" element={<Layout />}/>
            <Route path="/home" element={< Layout/>} />
            <Route path="/fab" element={< Wishlist/>} />
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
