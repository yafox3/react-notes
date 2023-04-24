import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'

function App() {
	return (
        <BrowserRouter>
            <Navbar />
            <div className='container pt-4'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                </Routes>       
            </div>
        </BrowserRouter>
	)
}

export default App
