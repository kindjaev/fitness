import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {Box} from "@mui/material"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ExerciseDetail from "./pages/ExerciseDetail"
import NotFound from './components/NotFound'



function App() {
  return (
    <div >
      <Router>
        <Box width="400px" sx={{width: {xl: "1488"}}} m="auto">
          <Nav />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/exercise/:id" element={<ExerciseDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          <Footer />
        </Box>
      </Router>
    </div>
  )
}

export default App