import React from 'react';

function NewRecuritUnit({props}){
	return (
		<div className="predict_area">
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

function NewRecruitUpload({props}){
	const unit = props

	return (
		<ul className="prediction">
			{unit.map(unitValue => (
				<li><NewRecuritUnit props={unitValue}/></li>
			))}
		</ul>
	);
}

export default NewRecruitUpload;