import { Suspense, lazy} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShimmerSimpleGallery } from "react-shimmer-effects";

import TodoList from './Component/TodoList/TodoList';
import Layout from './Component/Layout/Layout';
import About from './Component/NamestyReact/About/About';
import Stopwatch from './Component/Stopwatch/Stopwatch';
import Cart from './Component/Cart/Cart';
import NamastyReact from './Component/NamestyReact/NamastyReact';
import RestaurantMenu from './Component/NamestyReact/RestaurantMenu/RestaurantMenu';

const Instamart = lazy(()=> import("./Component/NamestyReact/Instamart/Instamart"))

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
          <Route path="/instamart" element={<Suspense fallback={ShimmerSimpleGallery}>< Instamart/></Suspense>} />
          <Route path="restaurant/:resId" element={<RestaurantMenu/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
