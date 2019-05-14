import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import Logo from 'assets/images/Logo.png'

const MovieFind = (props) => {
  const { searchTitle, onChange, disabled } = props
  return (
    <MovieFindContainer>
      <LogoContainer>
        <img
          width={200}
          alt='Moves I Love - Your gallery of upcoming movies'
          src={Logo} />
        <Typography gutterBottom variant="h5" component="h4" style={{ color: '#fff' }}>
          Your gallery of upcoming movies
        </Typography>
      </LogoContainer>
      <FindContainer>
        <InputAndButtonContainer>
          <InputContainer>
            <StyledInput
              disabled={disabled}
              value={searchTitle}
              onChange={onChange}
              placeholder="Search Movie" />
          </InputContainer>
        </InputAndButtonContainer>
      </FindContainer>
    </MovieFindContainer>
  )
}

const MovieFindContainer = styled.header`
  height: 200px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  width: 100%;
  padding-bottom: 20px;
`;

const FindContainer = styled.div`
  width: 70%;
  text-align: center;
`;

const InputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const InputContainer = styled(Paper)`
  width: 80%; 
  padding: 2px 4px;
  display: flex;
  align-items: center;
`

const StyledInput = styled(InputBase)`
  margin-left: 8px;
  flex: 1;
`

MovieFind.propTypes = {
  searchTitle: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default MovieFind