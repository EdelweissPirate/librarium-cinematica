import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Movie from "../components/Movie"
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
        window.scrollTo(0, 0)
        dispatch(reset())
    };

    const onClick = (_pageNum) => {
        setPageNum(_pageNum)
        window.scrollTo(0, 0)
    }

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
                        <>
                            <div style={{width: '100%', color: '#222222', fontSize: 'large'}}>
                                <p>Showing results {1 + (8 * (pageNum - 1))} - {movies.length > 8 ? (7 + ((movies.length - 8) * pageNum - 1)) : movies.length}</p>
                            </div>

                            {movies.length > 8 ? 
                                <div style={{width: '100%', margin: '1em 0 0em 0', padding: '1em 0 1em 0', display: 'flex', justifyContent: 'center'}}>
                                    <button className="btn" onClick={() => onClick(1)}>1</button>
                                    <button className="btn" onClick={() => onClick(2)}>2</button>
                                </div>
                            : null}

                            {movies.map((movie, index) => {
                                if(index >= 0 + (8 * (pageNum - 1)) && index <= 7 * pageNum){
                                    return <Movie key={`${index}-${movie.Title}`} movie={movie} />
                                } else {
                                    return null
                                }
                            })} 

                            <div style={{width: '100%', margin: '1em 0 4em 0', padding: '0em 0 5em 0', display: 'flex', justifyContent: 'center'}}>
                                {movies.length > 8 ? 
                                    <>
                                        <button className="btn" onClick={() => onClick(1)}>1</button>
                                        <button className="btn" onClick={() => onClick(2)}>2</button>
                                    </>
                                : null}
                            </div>
                        </>
                    : <ModelViewer scale="1" modelPath={"/camera.glb"} />
                }
            </div>
        </div>
    )
}

export default Home