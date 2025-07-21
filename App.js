import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import './App.css';

// Pages
function Home() {
  return (
    <div className="content-wrapper">
      <h2>
        <p id="line1">Welcome</p>
      </h2>
      <h2>
        <p id="line3">To My Website</p>
      </h2>
      <h5 id="line2"> 
        Hello and welcome to my website! This website will showcase a few projects that I have completed at Penn State. Feel free to provide any additional feedback to build upon my skills.
      </h5>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <div className="about-wrapper">
        <div className="about-image">
          <img src="/me.png" alt="Sunny Patel" />
        </div>
        <div>
          <div className="about-text">
            <h1>Sunny Patel</h1>
          </div>
          <div className="about-h">                 
            <h1>
              I am currently a student at Penn State studying Electrical and Computer Engineering Technology.
            </h1>
          </div>
        </div>
      </div>

      <div className="experience">
        <h1>Experience</h1>
        <div className="circles">
          <div className="circle html">HTML</div>
          <div className="circle java">JAVA</div>
          <div className="circle python">PYTHON</div>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const projects = [
    {
      // image: '/about.jpg',
      title: 'RC Car Project',
      description: 'A remote-controlled car with real-time steering and motor control.',
    },
    {
      // image: '/project2.jpg',
      title: 'IoT Weather Station', 
      description: 'Built a system to monitor and transmit live weather data using sensors.',
    },
    {
      // image: '/project3.jpg',
      title: 'Smart Lighting System',
      description: 'Automated lighting based on motion sensors and ambient light.',
    },
  ];

  return (
    <div className="page"> 
      <h1>Project Gallery</h1>
      <div className="gallery">
        {projects.map((project, index) => (
          <div className="gallery-card" key={index}>
            <img src={project.image} alt={project.title} className="gallery-image" />
            <div className="gallery-caption">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Rate() {
  return (
    <div className="page5">
      <h1>Fill out</h1>
    </div>
  );
}

// Navbar
function Navbar() {
  const location = useLocation(); 
  const [menuOpen, setMenuOpen] = useState(false);

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/about': 
        return 'About Me';  
      case '/gallery':
        return 'Projects';
      case '/rate':
        return 'Rate My Projects';
      default:
        return 'My Projects';
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  }; 

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-title">{getTitle()}</h2>
      </div>

      <div className="navbar-center">
        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" onClick={handleLinkClick}>About Me</Link>
          <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
          <Link to="/rate" onClick={handleLinkClick}>Provide Feedback</Link>
        </div>
      </div>

      <button
        id="hamburger"
        className="hamburger"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </button>

      <img src="/PSU.png" alt="Logo" className="logo" />
    </nav>
  );
}

// Dynamic wrapper
function AppWrapper() {
  const location = useLocation();

  const getPageClass = () => {
    switch (location.pathname) {
      case '/':
        return 'home-background';
      case '/about':
        return 'about-background';
      case '/gallery':
        return 'gallery-background';
      case '/rate':
        return 'rate-background';
      default:
        return '';
    }
  };

  return (
    <div className={`app-wrapper ${getPageClass()}`}>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rate" element={<Rate />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
