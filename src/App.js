
import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import WorksPage from './pages/WorksPage/WorksPage';
import BlogPage from './pages/BlogPage/BlogPage';
import ContactPage from './pages/ContactPage/ContactPage';
import Footer from './components/Footer/Footer';
import WorkInfoPage from './pages/WorkInfoPage/WorkInfoPage';
import { useState } from 'react';
import Mobile from './components/Mobile/Mobile';



function App() {

    const [active, setActive] = useState(false)

// console.log(active)

  return (
    <div className="App">
      <Mobile active={active} setActive={setActive}/> 
      <Header active={active} setActive={setActive}/> 
        <Routes>
          <Route path='/' element ={<HomePage />}/>
          <Route path='/works' element ={<WorksPage />}/>
          <Route path="/works/:id" element={<WorkInfoPage />}/>
          <Route path='/blog' element ={<BlogPage />}/>
          <Route path='/contact' element ={<ContactPage />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
