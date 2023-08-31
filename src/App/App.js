import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../Pages/Landing';
import Layout from '../Pages/Layout';
import Detail from '../Pages/DetailsHouse';
import Houses from '../Pages/Houses';
import AboutUs from '../Pages/AboutUs';
import NotFound from '../Pages/NotFound';
import SearchBar from '../Components/SearchBar';
import Login from '../Pages/Login';
import Register from '../Pages/Register';


function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/details/:id' element={<Detail/>}/>
        <Route exact path='/houses' element={<Houses/>}/>
        <Route exact path='/about' element={<AboutUs/>}/>
        <Route exact path='/search' element={<SearchBar/>}/>
        <Route  exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='*' element={<NotFound/>}/>
      </Routes>
    </Layout>
  );
}

export default App;