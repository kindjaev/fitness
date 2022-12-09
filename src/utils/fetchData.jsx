import NotFound from "../components/NotFound";

export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_EXERCISE_OPTIONS_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBE_OPTIONS_KEY,
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options)
    // const  data = await res.json()
    let data
    try {
        if(!res.ok){
            throw Error("Data not found")
        }
        data = await res.json()
    } catch (error) {
        console.log(error.message)
        if (error.message === "Unexpected end of JSON input"){
            window.location.replace("/")
        }
    }
  return data
}

