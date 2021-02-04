import React from 'react';
import './resume.css';
// import Button from '../Button.js';

function addingResume(){
	return (
		<a href="s" className="resume">
			<h3>
				<p className="comment">프로필에 이력서 추가하고, 인사담당자에게 직접 면접 제안 받으세요.</p>
			</h3>
			<button type="button" className="btn">이력서 강화하기</button>
		</a>
	);
}

export default addingResume;