import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import MovieAvatar from './shared/MovieAvatar'
import Placeholder from './shared/Placeholder'

function Movie({ movie }) {
    const [plot, setPlot] = useState(null)

    const poster = movie.Poster === 'N/A' ? Placeholder() : movie.Poster
    
    const processTitle = () => {
        return movie.Title.split(' ').join('+').toLowerCase()
    }

    const truncateString = (string, length) => {
        if(string.length > length){
            string = string.slice(0, length-1).trim() + '...' 
        }

        return string
    }

    const getPlot = async () => {
        const res = await fetch(`https://www.omdbapi.com/?t=${processTitle()}&plot=full&apikey=e1ce6612`)
            .then(async response => {return await response.json()})
            .catch(error => {return error})

        if(res.Plot){
            const _plot = truncateString(res.Plot, 915)
            
            setPlot(_plot)
        }
    }
    
    useEffect(() => {
        getPlot()
    }, [])
    

    const movieStyles = {
        borderTop: '5px solid #222222',
        borderBottom: '5px solid #222222',
        display: 'flex',
        flexDirection: window.innerWidth > 900 ? 'row' : 'column',
        justifyContent: 'space-between',
        padding: window.innerWidth > 900 ? '2em 4em' : '2em 0',
        backgroundImage: `url(${poster})`,
        backgroundRepeat: 'no-repeat',
        height: '411px', //'100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: '2em 0',
        color: '#fff',
        width: '100vw',
        position: 'relative',
        left: 'calc(-50vw + 50%)',
        backgroundAttachment: 'fixed',
        textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
        boxShadow: 'inset 0px 0px 50px #333333'
    }

    const movieTitleStyles = {
        marginBottom: '1em', 
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: window.innerWidth > 900 ? 'none' : 'rgba(30, 30, 30, .5)', 
        padding: '1em', 
        borderRadius: '15px'
    }

    const moviePlotStyles = {
        display: window.innerWidth > 900 ? 'block' : 'none', 
        backgroundColor: 'rgba(30, 30, 30, .5)', 
        padding: '1em', 
        borderRadius: '15px'
    }

    if(!movie) return <h1>MOVIE</h1>

    return (
        <div style={movieStyles}>
            <Suspense fallback='Loading...'>
                <Canvas width='50%'>
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <MovieAvatar position={[0, 0, 2]} texture={poster} />
                </Canvas>
            </Suspense>

            <div className='movie-info'>
                <div style={movieTitleStyles}>
                    <h2>{truncateString(movie.Title, 26)}</h2>
                    <p>({movie.Year})</p>
                </div>

                <div style={moviePlotStyles} >
                    <p>{plot}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie