import React from 'react'
import {Link} from "react-router-dom"
import {Stack} from "@mui/material"
import Logo from "../assets/images/Logo.png"

const logoStyle = {
  width: "48px",
  margin: "0 20px",
}
const linkStyle = {
  textDecoration: "none",
  color: "#3a1212"
}

function Nav() {
  return (
    <Stack 
      direction='row' 
      justifyContent="space-around" 
      sx={{gap: {sm: "122px", xs: "40px"}, mt: {sm: "32px", xs: '20px'}, justifyContent: "none"}} px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="" style={logoStyle} />
      </Link>
      <Stack direction="row" alignItems="center" gap="24px" fontSize="24px"> 
        <Link to="/" style={linkStyle}>Home</Link>
        <a href="#exercises" style={linkStyle}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Nav