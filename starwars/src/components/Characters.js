import React, { useState } from 'react';
import Character from './Character';

function Characters (props) {
    const { data } = props;
    const [charData, setCharData] = useState(null);

    if(data) {
        return(
            <div>
                {
                    data.map(char => {
                        setCharData(char);
                        return <Character charData={charData}/>
                    })
                }
            </div>
        )
    } else {
        return <div>LOADING...</div>
    }
};

export default Characters;