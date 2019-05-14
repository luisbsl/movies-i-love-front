import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { MOVIE_POSTER_LARGE_BASEURL } from 'constants/index'
import GenreBadge from '../GenreBadge'

const MoviePopup = (props) => {
  const { onClose, open, movie } = props
  return (
    <Dialog
      fullWidth={true}
      maxWidth={'md'}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title">
      <DialogTitle style={{ textAlign: 'center' }} id="simple-dialog-title">
        {movie.title}
      </DialogTitle>

      <Container>
        <MoviePosterContainer>
          <img alt={movie.title} src={MOVIE_POSTER_LARGE_BASEURL + movie.poster_path} />
        </MoviePosterContainer>
        <MovieDetailsContainer>
          <Typography component="p" style={{ marginTop: 20, fontWeight: 'bold', fontSize: 18 }}>
            {movie.overview}
          </Typography>

          <Typography component="p" style={{ marginTop: 20, fontSize: 15 }}>
            Release date: {movie.release_date}
          </Typography>

          {movie.genre_ids ?
            <Typography component="p" style={{ flex: 1, flexWrap: 'wrap', marginTop: 20, fontSize: 15 }}>
              <span style={{ marginRight: 5 }} >
                Genres:
              </span>
              {movie.genre_ids.map(genre =>
                <GenreBadge key={genre.id} name={genre.name} />
              )}
            </Typography>
            : null}
        </MovieDetailsContainer>
      </Container>
    </Dialog>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 520px;
`;

const MoviePosterContainer = styled.div`
  width: 342px; 
  margin-left: 10px;
`
const MovieDetailsContainer = styled.div`
  width: 80%; 
  margin-left: 10px; 
  margin-right: 10px;
`

MoviePopup.propTypes = {
  movie: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default MoviePopup