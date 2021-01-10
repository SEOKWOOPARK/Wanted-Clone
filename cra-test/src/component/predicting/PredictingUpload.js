import React from 'react';
import predict from '../jsonFile/predicting.json'
import './Predict.css';

function PredictingUnit({props}){
	return (
		<div className="predict_area">
			{/* <h2 className="company_cover">{props.companyCover}</h2> */}
			<img
				className="image" 
				src={props.companyCover}
				alt={props.index} 
				width="255px" 
				height="auto" 
			/>
			<div className="predict_body">
				<div className="job_role">{props.role}</div>
				<div className="job_company_name">{props.companyName}</div>
				<div className="job_location">{props.location}</div>
				<div className="job_compensation">{props.compensation}</div>
			</div>
		</div>
	);
}

function PredictingUpload(){
	const unit = predict;

	return (
		<ul className="prediction">
			{unit.map(value => (
				<li><PredictingUnit props={value}/></li>
			))}
		</ul>
	);
}

export default PredictingUpload;