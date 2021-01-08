import React from 'react';
import './resume.css';
import Button from '../button.js';

function addingResume(){
	return (
		<div className="adding_resume">
			<p className="comment">프로필에 이력서 추가하고, 인사담당자에게 직접 면접 제안 받으세요.</p>
			<Button className="btn" props="이력서 강화하기"/>
		</div>
	);
}

export default addingResume;