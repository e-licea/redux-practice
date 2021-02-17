import React from 'react'
//imports
import { connect } from 'react-redux';



function MovieList() {


    const mapStateToProps = state =>{
        return {
            movies: state.movies,
            moviesToWatch: state.moviesToWatch,
            user: state.user
        }
    }
    return (
        <div>
            
        </div>
    )
}


export default connect(mapStateToProps, {})(MovieList);