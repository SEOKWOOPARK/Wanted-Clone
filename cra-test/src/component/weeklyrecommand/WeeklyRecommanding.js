import React from 'react';
import WeeklyRecommandingUpload from './WeeklyRecommandingUpload';
import weeklyrecommading from '../jsonFile/weeklyrecommanding.json';
import './WeeklyRecommanding.css';

function WeeklyRecommanding(){
	return (
		<div className="predict_pass_expected">
			<h3 className="section_name">금주의 추천</h3>
			<WeeklyRecommandingUpload props={weeklyrecommading}/>
		</div>
	);
}

export default WeeklyRecommanding;