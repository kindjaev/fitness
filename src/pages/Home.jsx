import React, {useState} from 'react'
import {Box} from "@mui/material"
import HerroBanner from '../components/HerroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'


function Home() {
  const [bodyPart, setBodyPart] = useState("all")
  const [exercises, setExercises] = useState([])
  return (
    <Box>
      <HerroBanner />
      <SearchExercise setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} exercises={exercises}/>
    </Box>
  )
}

export default Home