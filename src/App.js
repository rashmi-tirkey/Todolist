import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TodoList from './Component/TodoList/TodoList';
import Layout from './Component/Layout/Layout';
import About from './Component/NamestyReact/About/About';
import Stopwatch from './Component/Stopwatch/Stopwatch';
import Cart from './Component/Cart/Cart';
import NamastyReact from './Component/NamestyReact/NamastyReact';
import RestaurantMenu from './Component/NamestyReact/RestaurantMenu/RestaurantMenu';
//import Header from './Component/NamestyReact/Header/Header';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path='/' element={<Layout />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/namastyreact" element={<NamastyReact />} />
          <Route path="/about" element={<About />} />
          <Route path="restaurant/:resId" element={<RestaurantMenu/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
