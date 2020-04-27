import React from 'react'
import axios from 'axios'
import MovieList from './components/MovieList'
import Navigation from './components/Navigation'
import { CardColumns } from 'react-bootstrap'
import Ticker from 'react-ticker'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: []
        } 
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=d7cd318e78bcc8e62adff521f04d307b')
            .then( result => {
                console.log(result.data.results)
                this.setState({
                    movies: result.data.results
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { movies } = this.state
        return (
            <>
                <Navigation />
                    <div style={{color:'#444444', fontSize: '60px', boxShadow: "2px 3px 10px #9E9E9E"}}>
                        <Ticker mode="smooth" speed={10}>
                            {() => (
                                <h1>
                                    TRENDING - This Week
                                </h1>
                            )}
                        </Ticker>
                    </div>
                <CardColumns >
                    <MovieList movies={movies} />
                </CardColumns>
            </>
        )
    }
}