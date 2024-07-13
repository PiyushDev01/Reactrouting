import './App.css';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <h1>Routing</h1>
        <div><Link to="/"><button>Home</button>{" "}</Link>
        <Link to="/about"><button>About</button>{" "}</Link>
        <Link to="/contact"><button>Contact</button>{" "}</Link></div>
        
        <br />
        <div id='routingarea'>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
