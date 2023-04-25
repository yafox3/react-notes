import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import NoteEditor from './pages/NoteEditor/NoteEditor'

function App() {
    const [currentNote, setCurrentNote] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    function editNote(note) {
        setCurrentNote(note)
        setIsEdit(true)
    }

	return (
        <BrowserRouter>
            <Navbar />
            <div className='container pt-4'>
                <Routes>
                    <Route path='/' element={<Home editNote={editNote}/>}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/editor' element={<NoteEditor currentNote={currentNote} isEdit={isEdit} setIsEdit={setIsEdit}/>}/>
                    <Route path='*' element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
	)
}

export default App
