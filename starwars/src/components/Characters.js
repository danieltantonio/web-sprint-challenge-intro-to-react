import React, { useState } from 'react';
import Character from './Character';
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
                        return <Character charData={char}/>
                    })
                }
            </CharactersComp>
        )
    } else {
        return <div>LOADING...</div>
    }
};

export default Characters;