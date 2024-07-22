import './App.css';
import Sidenav from './comp/Sidenav';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import  About  from './pages/About';
import Store from './pages/Store';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/products" exact element={<Products/>}></Route>
      <Route path="/about" exact element={<About/>}></Route>
      <Route path="/store" exact element={<Store/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
