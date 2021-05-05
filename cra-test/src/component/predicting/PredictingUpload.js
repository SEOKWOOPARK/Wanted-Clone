import React from 'react';
import { Link } from 'react-router-dom';
import './Predict.css';

function PredictingUnit({props}){
	return (
		<div className="predict_area">
			<Link
				className="link"
				to={{
					pathname: `/companyName/${props.companyName}`,
					state: {
						id: props.index,
						companyCover: props.companyCover,
						companyName: props.companyName,
						role: props.role,
						location: props.location,
						compensation: props.compensation,
						originalPage: props.originalPage,
						detailPage: props.detailPage,
					}
				}}
			>
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
				</Link>
		</div>
	);
}

function PredictingUpload({props}){
	const unit = props;

	return (
		<ul className="prediction">
			{unit.map(unitValue => (
				<li><PredictingUnit props={unitValue}/></li>
			))}
		</ul>
	);
}

export default PredictingUpload;