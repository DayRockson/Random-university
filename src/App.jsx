
import { BrowserRouter, Routes, Route } from 'react-router'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Campus from './pages/Campus'
import Research from './pages/Research'
import Programs from './pages/Programs'
import Layout from './components/Layout'


import './server'


function App() {
    return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="academics" element= {<Academics />} />
          <Route path="campus" element= {<Campus />} />
          <Route path="admissions" element= {<Admissions />} />
          <Route path="research" element= {<Research />} />
          <Route path="programs" element= {<Programs />} />
        </Route>  
      </Routes>  
    </BrowserRouter>
  )
}

export default App
