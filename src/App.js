import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddNewProductComponent from './components/AddNewProductComponent/AddNewProductComponent';
import GetAllProductsComponent from './components/GetAllProductsComponent/GetAllProductsComponent';
import GetCartItemsComponent from './components/GetCartItemsComponent/GetCartItemsComponent';

function App() {
  return (
    <Router>
            <div className="container">
              <h1>Shopping Cart App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Products</Link>
                <Link to="/cart" >Cart</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllProductsComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewProductComponent/>}></Route>
                 <Route path='/cart' element={<GetCartItemsComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;