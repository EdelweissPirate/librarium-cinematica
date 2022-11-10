import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Splash from "./pages/Splash";


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />

          <section>
            <Routes>
              <Route path='/' element={<Splash />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          </section>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
