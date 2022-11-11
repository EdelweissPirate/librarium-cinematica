const initFilms = async () => {
    const MOVIE_API_URL = "https://www.omdbapi.com/?s=the+witch&apikey=e1ce6612";

    return await fetch(MOVIE_API_URL)
        .then(res => res.json())
        .then(resJSON => { return resJSON.Search })
        .catch(error => { return error })
}

const searchFilms = async (arg) => {
    return await fetch(`https://www.omdbapi.com/?s=${arg.searchValue}&apikey=e1ce6612`)
        .then(res => res.json())
        .then(resJSON => { 
            // console.log('test')
            return resJSON.Response ? 
                resJSON.Search : resJSON.Error 
        })
        .catch(error => { throw new Error(error) })
}


const moviesService = {
    initFilms,
    searchFilms
}

export default moviesService