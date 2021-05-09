import React from 'react';
import Predicting from './predicting/Predicting.js';
import WeeklyRecommanding from './weeklyrecommand/WeeklyRecommanding';
import NewRecruit from './NewRecruit/NewRecruit.js'
import CarouselContainer from './CarouselContainer.js';
import AddingResume from './profileResume/addingResume.js';
import WritingResume from './WritingResume/WritingResume.js'

function CardView(){
	return (
		<div>
			<WritingResume />
			<CarouselContainer />
			<AddingResume />
			<Predicting />
			<WeeklyRecommanding />
			<NewRecruit />
		</div>
	);
}

export default CardView;