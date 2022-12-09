import React from 'react'
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {Box} from "@mui/material"
import {fetchData, exerciseOptions, youtubeOptions} from "../utils/fetchData"
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import Loader from '../components/Loader'

function ExerciseDetail() {
  const [similarEquipment, setSimilarEquipment] = useState([])
  const [similarExercises, setSimilarExercises] = useState([])
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [youtubeData, setYoutubeData] = useState([]) 
  const {id} = useParams()


  useEffect(() => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises/exercise/'
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/search?query='
    const exerciseSimilarDbUrl = 'https://exercisedb.p.rapidapi.com/exercises'

    const exerciseDetailFetch = async () => {
      const exerciseDetailData = await fetchData(exerciseDbUrl + id, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideoData = await fetchData(youtubeSearchUrl + exerciseDetailData.name + "exercise", youtubeOptions)
      setYoutubeData(exerciseVideoData.contents)

      const exercisesData = await fetchData(exerciseSimilarDbUrl, exerciseOptions)

      const similarMuscleGroupDb = await exercisesData.filter(item => item.target.includes(exerciseDetailData.target))
      setSimilarExercises(similarMuscleGroupDb)

      const similarEquipmentDb = await exercisesData.filter(item => item.equipment.includes(exerciseDetailData.equipment))
      setSimilarEquipment(similarEquipmentDb)
    }
    exerciseDetailFetch()
  }, [id])

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail}/>
      {youtubeData.length ? <ExerciseVideos youtubeData={youtubeData} name={exerciseDetail.name}/> : <Loader />}
        <SimilarExercises similarExercises={similarExercises} similarEquipment={similarEquipment} /> 
    </Box>
  )
}

export default ExerciseDetail