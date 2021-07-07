import React, { useState } from 'react';
import Character from './Character';
import FavChars from './FavChars';
import styled from 'styled-components';

const CharactersComp = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function Characters (props) {
    const { data } = props;

    if(data) {
        return(
            <CharactersComp>
                {
                    data.map(char => {
                        if(char.name.includes('Rick') || char.name.includes('Morty')) {
                            return <FavChars charData={char}/>
                        } else {
                            return <Character charData={char}/>
                        }
                    })
                }
            </CharactersComp>
        )
    } else {
        return <div>LOADING...</div>
    }
};

export default Characters;