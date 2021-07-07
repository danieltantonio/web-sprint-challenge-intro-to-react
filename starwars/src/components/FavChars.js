import React from 'react';
import styled from 'styled-components';

const StyledFavChar = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 25%;
  border: 1px solid #fff;
  margin: 0;
`;

const FavChars = (props) => {
    const { charData } = props;
    return(
      <StyledFavChar>
          <h3>Cool Dude!</h3>
            <div className="Char-Img-Section">
              <img src={charData.image} />
            </div>
            <div className="Char-Txt-Section">
              <h4>{charData.name}</h4>
              <p>Species: {charData.species}</p>
              <p>Location: {charData.location.name}</p>
              <p>Origin: {charData.origin.name}</p>
            </div>
      </StyledFavChar>
  )
}

export default FavChars;