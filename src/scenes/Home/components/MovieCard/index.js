import React from 'react'
import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { MOVIE_POSTER_BASEURL } from 'constants/index'
import GenreBadge from '../GenreBadge'

const MovieCard = (props) => {

  const { movie, onClick } = props

  return (
    <MovieCardContainer onClick={onClick}>
      <CardActionAreaContainer>
        <MovieCardPosterContainer>
          <MovieCardPoster
            image={MOVIE_POSTER_BASEURL + movie.poster_path}
            title={"Movie Poster - " + movie.title}
          />
        </MovieCardPosterContainer>
        <CardContent>
          <MovieNameContainer>
            <Typography gutterBottom variant="h5" component="h2">
              {movie.title}
            </Typography>
          </MovieNameContainer>
          <MovieInformationContainer>
            <Typography component="p">
              Release in: {movie.release_date}
            </Typography>

            {movie.genre_ids ?
              <GenresContainer>
                {movie.genre_ids.map(genre =>
                  <GenreBadge key={genre.id} name={genre.name} />
                )}
              </GenresContainer>
              : null}
          </MovieInformationContainer>
        </CardContent>
      </CardActionAreaContainer>
    </MovieCardContainer>
  )
}

const MovieCardContainer = styled(Card)`
  width: 250px;
  height: 500px;
  border: 1px solid gray;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const CardActionAreaContainer = styled(CardActionArea)`
  height: 100%;
`;

const MovieCardPosterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const MovieNameContainer = styled.div`
  height: 100px;
`;

const MovieInformationContainer = styled.div`
  height: 50px;
`;

const MovieCardPoster = styled(CardMedia)`
  width: 185px;
  height: 278px;
`;

const GenresContainer = styled.div`
  margin-top: 5px; 
  width: 220px;
`

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MovieCard