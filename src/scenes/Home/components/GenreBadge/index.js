import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const GenreBadge = (props) => {
  const { name } = props
  return (
    <GenreBadgeContainer>
      <GenreBadgeLabel>
        {name}
      </GenreBadgeLabel>
    </GenreBadgeContainer>
  )
}

const GenreBadgeContainer = styled.span`
  background-color: #000;
  color: #fff;
  margin-right: 2px;
`

const GenreBadgeLabel = styled.span`
  margin-right: 5px;
  margin-left: 5px; 
  font-size: 12px; 
  font-weight: bold; 
  word-wrap: break-word;
`

GenreBadge.propTypes = {
  name: PropTypes.string.isRequired
};

export default GenreBadge