import React from 'react';
import Predicting from './predicting/Predicting.js';
import WeeklyRecommanding from './weeklyrecommand/WeeklyRecommanding';
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