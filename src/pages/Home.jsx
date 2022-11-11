import { Suspense, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Movie from "../components/Movie"
import Search from "../components/Search"
import ModelViewer from "../components/ModelViewer"

import { reset, searchFilms } from "../features/movies/moviesSlice"

function Home() {
    const { movies, isLoading, isError, message } = useSelector(state => state.movies)

    const dispatch = useDispatch()

    useEffect(() => {
        showHeader()
        search('')
        return () => {
        
        }
    }, [])

    const showHeader = () => {
        const _header = document.querySelector('header')
        _header.style.opacity = 1

        const _footer = document.querySelector('footer')
        _footer.style.opacity = 1
    }
    
    const search = searchValue => {
        dispatch(searchFilms({searchValue}))
        dispatch(reset())
    };

    return (
        <div id="home" className='home fadeIn' >
            <Search search={search} />
            
            <div className="movies">
                {isLoading && !isError ?
                    <span>Loading...</span>
                    : isError && message ?
                    <p>{message}</p>
                    : movies ? 
                    movies.map((movie, index) => {
                        if(index <= 7){
                            return <Movie key={`${index}-${movie.Title}`} movie={movie} />
                        } else {
                            return null
                        }
                    })
                    : <ModelViewer scale="1" modelPath={"/camera.glb"} />
                }
            </div>
        </div>
    )
}

export default Home