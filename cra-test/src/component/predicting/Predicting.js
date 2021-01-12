import React from 'react';
import PredictingUpload from './PredictingUpload';
import predict from '../jsonFile/predicting.json';
import './Predict.css';

function Predicting(){
	return (
		<div className="predict_pass_expected">
			<h2 className="section_name">합격예측 포지션</h2>
			<PredictingUpload props={predict}/>
		</div>
	);
}

export default Predicting;