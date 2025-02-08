import { useState } from "react"
import { Link, NavLink } from "react-router"
import { Menu, X } from "lucide-react"

function Header () {
  const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
          <div className="welcome">
            <nav className="nav-bar">
              <Link to="/" className="logo">RandomU</Link>
              {isOpen ? (
                <div className="nav-menu active">
                  <NavLink to="/" className="nav-link" onClick={() => setIsOpen(false)}>About Us</NavLink>
                  <NavLink to="academics" className="nav-link" onClick={() => setIsOpen(false)}>Academics</NavLink>
                  <NavLink to="campus" className="nav-link" onClick={() => setIsOpen(false)}>Campus</NavLink>
                  <NavLink to="admissions" className="nav-link" onClick={() => setIsOpen(false)}>Admissions</NavLink>
                  <NavLink to="research" className="nav-link" onClick={() => setIsOpen(false)}>Research</NavLink>
                  <NavLink to="programs" className="nav-link" onClick={() => setIsOpen(false)}>Programs</NavLink>
                </div>
              ) : 
              <div className="nav-menu">
                <NavLink to="/" className="nav-link">About Us</NavLink>
                <NavLink to="academics" className="nav-link">Academics</NavLink>
                <NavLink to="campus" className="nav-link">Campus Life</NavLink>
                <NavLink to="admissions" className="nav-link">Admissions & Aid</NavLink>
                <NavLink to="research" className="nav-link">Research</NavLink>
                <NavLink to="programs" className="nav-link">Programs</NavLink>
              </div>
              }
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden p-2 hamburger"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
              
              {/* Mobile Dropdown Menu */}
                    
            </nav>
          </div>
        </header>
    )
}

export default Header