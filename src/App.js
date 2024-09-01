
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Wishlist from './components/Layout/Wishlist';
import Layout from './components/Layout/Layout';
import Screen from './screen/Screen';
import Searched from './components/Layout/Searched';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Screen />}>
            <Route path="" element={<Layout />}/>
            <Route path="/home" element={< Layout/>} />
            <Route path="/fab" element={< Wishlist/>} />
            <Route path="/search" element={< Searched/>} />
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
