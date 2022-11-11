import Movie from "../components/Movie"

function Movies({ movies, pageNum, setPageNum }) {
    
    const onClick = (_pageNum) => {
        setPageNum(_pageNum)

        const moviesScroll = document.getElementById('movie-scroll');
        moviesScroll.scroll({top:0,behavior:'smooth'})
    }

    return (
        <div>
            <div style={{width: '100%', color: '#222222', fontSize: 'large', margin: movies.length > 8 ? '0' : '2.5em 0'}}>
                <p>Showing results {1 + (8 * (pageNum - 1))} - {movies.length > 8 ? (7 + ((movies.length - 8) * pageNum - 1)) : movies.length} of {movies.length}</p>
            </div>

            {movies.length > 8 ? 
                <div style={{width: '100%', margin: '1em 0 0em 0', padding: '1em 0 1em 0', display: 'flex', justifyContent: 'center'}}>
                    <button className="btn" onClick={() => onClick(1)}>1</button>
                    <button className="btn" onClick={() => onClick(2)}>2</button>
                </div>
            : null}

            <div id="movie-scroll" style={{height: 'calc(60vh)',overflowY: 'scroll'}}>
                {movies.map((movie, index) => {
                    if(index >= 0 + (8 * (pageNum - 1)) && index <= 7 * pageNum){
                        return <div key={`${index}-${movie.Title}`}>
                            <Movie movie={movie} />
                            <div className="spacer"></div>
                        </div>
                    } else {
                        return null
                    }
                })} 
            </div>
        </div>
    )
}

export default Movies