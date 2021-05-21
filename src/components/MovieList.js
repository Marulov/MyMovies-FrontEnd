import React from "react"
import { Link } from "react-router-dom"

const MovieList = (props) => {
   
    // overview de maxLength kadar harf yazılcak sonra ... konulcak kodu
    const truncateOverview = (overview, maxLength) => {
        if(!overview) return null
        if(overview.length <= maxLength) return overview
        return `${overview.substring(0, maxLength)} ...`
    }

    return(
        <div className="row">
            {props.movies.map((movie, i) => (

                <div className="col-lg-4" key={i}>
                <div className="card shadow-sm">
                    <img className="card-img-top" src={movie.imageURL} alt="movie"/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.name}</h5>
                        <p className="card-text">{truncateOverview(movie.overview, 95)}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <button type="button" onClick={() => props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                            
                            <Link to={`edit/${movie.id}`} type="button" className="btn btn-md btn-outline-primary">Edit</Link>
                            
                            <h2><span className="badge rounded-pill bg-secondary">{movie.rating}</span></h2>
                        </div>
                    </div>
                </div>
            </div>

            ))}
        </div>
        )
    
}

export default MovieList