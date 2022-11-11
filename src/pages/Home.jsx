import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Movies from "../components/Movies"
import Search from "../components/Search"
import ModelViewer from "../components/ModelViewer"

import { clearMovies, reset, searchFilms } from "../features/movies/moviesSlice"

function Home() {
    const [pageNum, setPageNum] = useState(1)

    const { movies, isLoading, isError, message } = useSelector(state => state.movies)

    const dispatch = useDispatch()

    useEffect(() => {
        showHeader()
        search('')
        return () => {
            dispatch(clearMovies())
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
        setPageNum(1)
        
        const moviesScroll = document.getElementById('movie-scroll');
        moviesScroll?.scroll({top:0,behavior:'smooth'})

        dispatch(reset())
    };

    return (
        <div id="home" className='home fadeIn' >
            <Search search={search} />
            
            <div className="movies">
                {isLoading && !isError ?
                        <div>
                            <span>Loading...</span>
                        </div>
                    : isError && message ?
                        <div>
                            <p>{message}</p>
                        </div>
                    : movies ? 
                    <Movies movies={movies} pageNum={pageNum} setPageNum={setPageNum} />
                    : <ModelViewer scale="1" modelPath={"/camera.glb"} />
                }
            </div>
        </div>
    )
}

export default Home