import Navbar from './components/Navbar';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route exact path="/product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
