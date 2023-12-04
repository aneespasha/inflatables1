import './App.css';
import { Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Home  from './components/Mid/Home/Home';
import AboutUs from './components/Mid/AboutUs/AboutUs';
import  Products from './components/Mid/Products/Products';
import Contact from './components/Mid/Contact/Contact';
import FindUs from './components/FindUs/FindUs';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/Products" element={<Products />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
      <FindUs />
    </div>
  );
}

export default App;
