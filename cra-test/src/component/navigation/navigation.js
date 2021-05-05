import React from 'react';
import './Navigation.css';

function navigation(){
    return (
        <div className="navigation_tab">
            <h2 className="company_name">Wanted</h2>
            <nav>
                <ul>탐색</ul>
                <ul>직군별 연봉</ul>
                <ul>이력서</ul>
                <ul>커리어 성장</ul>
                <ul>매치업</ul>
                <ul>프리랜서</ul>
            </nav>
        </div>
    );
}

export default navigation;