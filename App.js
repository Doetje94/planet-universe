import React from 'react'
/*import {Routes, Route} from 'react-router-dom'*/
import Story from './components/Story'
import Roadmap from './routes/Roadmap'
import Team from './components/Team'
import { Contact } from './routes/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  );
} 

export default App;