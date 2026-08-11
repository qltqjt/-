import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { StudentProvider, useStudent } from './contexts/StudentContext'
import Sidebar from './components/Sidebar/Sidebar'
import TopBar from './components/TopBar/TopBar'
import StudentSelect from './pages/StudentSelect/StudentSelect'
import Home from './pages/Home/Home'
import SpiritTraining from './pages/SpiritTraining/SpiritTraining'
import Library from './pages/Library/Library'
import SpellDetail from './pages/SpellDetail/SpellDetail'
import Tribulation from './pages/Tribulation/Tribulation'
import styles from './App.module.css'

function AppLayout() {
  const { student } = useStudent()
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.mainArea}>
        <TopBar />
        <Routes>
          <Route path="/" element={<StudentSelect />} />
          <Route path="/home" element={student ? <Home /> : <Navigate to="/" />} />
          <Route path="/spirit-training" element={student ? <SpiritTraining /> : <Navigate to="/" />} />
          <Route path="/library" element={student ? <Library /> : <Navigate to="/" />} />
          <Route path="/spell/:spellId" element={student ? <SpellDetail /> : <Navigate to="/" />} />
          <Route path="/tribulation/:spellId" element={student ? <Tribulation /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <StudentProvider>
        <AppLayout />
      </StudentProvider>
    </BrowserRouter>
  )
}
