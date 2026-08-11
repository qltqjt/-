import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'

function App() {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Routes>
          <Route path="/" element={
            <div className={styles.placeholder}>
              <h1>英语的修仙之路</h1>
              <p>学生选择页 — 即将呈现</p>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
