import React from 'react';
import Predicting from './Predicting/Predicting.js';
import WeeklyRecommanding from './WeeklyRecommand/WeeklyRecommanding';
import NewRecruit from './NewRecruit/NewRecruit.js';

function CardView(){
    return (
        <div>
            <Predicting />
            <WeeklyRecommanding />
            <NewRecruit />
        </div>
    );
}

export default CardView;