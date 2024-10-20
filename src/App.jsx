
import { Route, Routes } from "react-router-dom"
import Login from "./Routes/Login"
import Register from "./Routes/Register"
import Products from "./Routes/Products"
import Create from './Routes/Create'
import Edit from './Routes/Edit'

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Register" element={<Register />}/>
      <Route path="/Products" element={<Products />}/>
      <Route path="/Create" element={<Create />}/>
      <Route path="/Edit" element={<Edit />}/>
    </Routes>
  )
}
