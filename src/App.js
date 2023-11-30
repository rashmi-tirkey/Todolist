import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TodoList from './Component/TodoList/TodoList';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
// import About from './Component/About/About';
import Stopwatch from './Component/Stopwatch/Stopwatch';
import Cart from './Component/Cart/Cart';
import NamastyReact from './Component/NamestyReact/NamastyReact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Layout />} />
          <Route path='/home' element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/namastyreact" element={<NamastyReact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
