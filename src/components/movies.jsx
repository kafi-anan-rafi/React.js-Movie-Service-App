import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'

class Movies extends Component {
    state = { 
        movies: getMovies()
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    render() { 
        const {length: count} = this.state.movies;

        if(count === 0) 
            return <h4 className="m-4">There are no movies in the Databese!</h4>
        return ( 
            <React.Fragment>
                <p>Showing {count} movies in the Database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => 
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>)}
                    </tbody>
                    </table>
            </React.Fragment>
            
         );
    }
}

export default Movies;