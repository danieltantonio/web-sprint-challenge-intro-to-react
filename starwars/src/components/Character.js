// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterComp = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 30%;
  border: 1px solid #fff;
  margin: 0;
`;

function Character(props) {
    const { charData } = props;
    
    return(
        <CharacterComp>
            <div className="Char-Img-Section">
              <img src={charData.image} />
            </div>
            <div className="Char-Txt-Section">
              <h4>{charData.name}</h4>
              <p>Species: {charData.species}</p>
              <p>Location: {charData.location.name}</p>
              <p>Origin: {charData.origin.name}</p>
            </div>
        </CharacterComp>
    )
}

export default Character;