import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { User } from "./pages/user"
import { Register } from "./pages/register"
import { Go } from "./pages/go"
import { Layout } from './pages/layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/go/:code" element={<Go/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
