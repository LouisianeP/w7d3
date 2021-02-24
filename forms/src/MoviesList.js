import React from 'react'

export default function MoviesList(props) {
    console.log(props.movies);

    const list = props.movies.map(movie => {
        // let oscarMessage = '';
        // if (movie.hasOscars) {
        //     oscarMessage = 'Oscar winning movie'
        // } else {
        //     oscarMessage = 'No Oscar'
        // }
        return (
            // the key prop has to be added - otherwise React will warn you - you should not use the index
            // but an id
            <div key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.director}</p>
                {/* <p>{movie.rate}</p> */}
                {/* <p>{oscarMessage}</p> */}

                {/* This is the inline version of an if statement */}
                {/* // if the movie rate is > 9.1 then display it */}
                {movie.rate > 9.1 && <p>{movie.rate}</p>}

                {/* Ternary Operator - inline version of an if else statement */}
                {/* isItTrue ? doThis : ohterwiseDoThat */}
                {movie.hasOscars ? <p>Oscar winning movie ⭐️</p> : <p>No Oscar 😔</p>}
            </div>
        )
    })
    return (
        <div>
            {list}
        </div>
    )
}
