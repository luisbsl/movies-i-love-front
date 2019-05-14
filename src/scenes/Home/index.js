import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MovieFind from './components/MovieFind'
import MovieCard from './components/MovieCard'
import MoviePopup from './components/MoviePopup'

import { GetMovies } from 'scenes/Home/services/MovieService'

class Page extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      hasMovies: false,
      unfilteredMovies: [],
      movies: [],
      selectedMovie: {},
      showMoviePopup: false,
      searchTitle: '',
      noMovieNameFound: false
    }
  }

  componentWillMount = async () => {
    GetMovies().then(_movies => {
      this.setState({ movies: _movies, unfilteredMovies: _movies, hasMovies: true })
    })
  }

  showMovieDetail = (movie) => {
    console.log(movie)
    this.setState({ selectedMovie: movie, showMoviePopup: true })
  }

  handleClose = () => {
    this.setState({ selectedMovie: {}, showMoviePopup: false })
  };

  renderMovies = () => {
    return (
      this.state.movies.map(movie => <MovieCard
        key={movie.id}
        movie={movie}
        onClick={this.showMovieDetail.bind(this, movie)}
      />)
    )
  }

  renderLoading = () => (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12}>
        <CircularProgress style={{ color: '#FFFFFF' }} />
      </Grid>

    </Grid>
  )

  renderNoMovieHaveFound = () => (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12}>
        <Typography component="p" style={{ color: '#fff', fontSize: 16 }} >No movie have found</Typography>
      </Grid>

    </Grid>
  )

  handleChangeSearchTitle = (event) => {
    const searchTitle = event.target.value.toUpperCase()
    this.setState({ searchTitle: searchTitle, noMovieNameFound: false })

    if (searchTitle.length > 0) {
      var filteredMovies = this.state.movies;

      filteredMovies = filteredMovies.filter(function (movie) {
        return movie.title.toUpperCase().search(
          searchTitle) !== -1;
      });

      this.setState({ movies: filteredMovies })

      if (filteredMovies.length < 1) {
        this.setState({ noMovieNameFound: true })
      }

    } else {
      this.setState({ movies: this.state.unfilteredMovies })
    }
  }

  handleSearchButton = () => {
    console.log('CLICKED')
  }

  render() {
    return (
      <HomeContainer>
        <MovieFind onClick={this.handleSearchButton.bind(this)} disabled={!this.state.hasMovies} onChange={this.handleChangeSearchTitle.bind(this)} searchTitle={this.state.searchTitle} />

        {this.state.hasMovies ?
          <MoviesCardsContainer>
            {this.renderMovies()}
          </MoviesCardsContainer> : this.renderLoading()}

        {this.state.noMovieNameFound ?
          this.renderNoMovieHaveFound()
          : null}

        <MoviePopup open={this.state.showMoviePopup} onClose={this.handleClose} movie={this.state.selectedMovie} />
      </HomeContainer>
    )
  }
}

const HomeContainer = styled.div`
      background-color: #42423e;
    `;

const MoviesCardsContainer = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-left: 10px;
      margin-right: 10px;
    `;

export default Page