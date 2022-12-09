import React, {useEffect, useState} from 'react'
import { Box, Stack, Typography} from "@mui/material"
import Pagination from "@mui/material/Pagination"

import {exerciseOptions, fetchData}  from "../utils/fetchData"
import ExerciseCard from './ExerciseCard'

function Exercises({exercises, setExercises, bodyPart}) {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9

  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const scrollTo = document.querySelector("#scrollTo")
  
  const paginate = (ev, value) => {
    setCurrentPage(value)
    // window.scrollTo({top: 1200, behavior: "smooth"})
    scrollTo.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }

  // useEffect(() => {
  //   const url = 'https://exercisedb.p.rapidapi.com/exercises'
  //   const fetchAllExercises = async () => {
  //     let allExercises = []
  //     if (bodyPart === "all"){
  //       allExercises = await fetchData(url, exerciseOptions)
  //     } else {
  //       allExercises = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
  //     }
  //     setExercises(allExercises)
  //   }
  //   fetchAllExercises()
  // }, [bodyPart])

  return (
    <Box id="exercises"
      p="20px" 
      sx={{mt: {lg: "100px", xs: "50px"}}}
    >
      <Typography variant='h4' mb="40px" id="scrollTo">Showing Results</Typography>
      {!exercises.length && <Typography variant='h8' mb="40px">Waiting for your search....</Typography>}
      <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{gap: {lg: "100px", xs: "50px"}}}>
        {exercises && currentExercises.map((exercise, i) => (
          <ExerciseCard key={i} data={exercise}/>
        ))}
      </Stack>
      
      <Stack mt="100px" alignItems="center"> 
          {exercises.length > 9 && (
            <Pagination shape='rounded' size="large" 
              count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} defaultPage={1}
              onChange={paginate}
            />
          )}
      </Stack>
    </Box>
  )
}

export default Exercises