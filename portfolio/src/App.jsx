import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/nav';
import Mainpage from './components/mainPage';
import ScrollToHash from './components/scoll';
import Footer from './components/footer';

function App() {
  
  return (
    <Router>
      <Navbar/>
      <ScrollToHash/>
      <main>
        <Routes>
          <Route path='/' element={<Mainpage />}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
