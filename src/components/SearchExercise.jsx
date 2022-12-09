import React, {useState, useEffect} from 'react'
import {Box, Typography, TextField, Button, Stack} from "@mui/material"
import HorizontalScrollBar from './HorizontalScrollBar'

import {exerciseOptions, fetchData} from "../utils/fetchData"

function SearchExercise({setExercises, bodyPart, setBodyPart}) {

  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercises = async () => {
      const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'

      const bodyPartsData = await fetchData(url, exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercises()
  }, [])

  const handleSearch = async (bodyPartSearch) => {
    const url = 'https://exercisedb.p.rapidapi.com/exercises'
    if(search || bodyPartSearch){
      const exerciseData = await fetchData(url, exerciseOptions)

      if (search || bodyPartSearch === "all"){
        setExercises(exerciseData)
        setSearch('')
      } else {

        const searchedExercises = exerciseData.filter(exercise => exercise.name.toLowerCase().includes(search || bodyPartSearch)
        || exercise.target.toLowerCase().includes(search || bodyPartSearch)
        || exercise.bodyPart.toLowerCase().includes(search || bodyPartSearch)
        || exercise.equipment.toLowerCase().includes(search || bodyPartSearch)
        )
        setExercises(searchedExercises)
        setSearch('')
      }
    }
  }

  return (
    <Stack alignItems="center" justifyContent="center" p="20px" mt="40px">
    <Typography sx={{fontSize: {lg:"50px", xs: "25px"}}} >SEARCH FOR YOUR NEEDS</Typography>
    <Box position="relative">
      <TextField 
      size="small"
      sx={{
        input: {
        fontWeight: "500",
        },
        width: {lg:"1000px",sm: "420px", xs: "250px"},
        backgroundColor: "white",
      }}
      color="error" 
      type="text" 
      label="Search Exercises" 
      value={search}
      onChange={e => setSearch(e.target.value.toLowerCase())}
       >
      </TextField>
        <Button 
          className='search-btn' 
          sx={{bgcolor: "#ff2625", color: "white", width: {lg: "125px", sm: "120px", xs: "80px"}, height: "40px"}}
          onClick={() => {
            handleSearch()
            window.scrollBy({top: 600, left: 0, behavior: "smooth"})
          }}
        >
        Search
        </Button>
    </Box>

    <Box sx={{position: "relative", width: "100%", p: "20px"}} >
      <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} setSearch={setSearch} handleSearch={handleSearch}/>
    </Box>  
    </Stack>
  )
}

export default SearchExercise