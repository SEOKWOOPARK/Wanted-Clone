import React, { useState, useEffect } from 'react';
import './ApplyingZone.css'

function ApplyingZone({props}){
    // useEffect(() => {
    //     alert(`${props.companyName} - ${props.role} 공고`);
    // }, [props.companyName]);

    const [apply, setApply] = useState('지원하기');
    const [bookmark, setBookmark] = useState('북마크하기');

    const applyFunc = (e) => {
        if(apply === '지원하기'){
            setApply('지원 완료');
            e.target.style.color = 'blue';
        }else if(apply === '지원 완료'){
            setApply('지원하기');
            e.target.style.color = 'red';
            e.target.style.backgroundColor = '#36f';
        }
        console.log(`현재 상태는 ${e.target.innerText}`);
    }

    const bookmarkFunc = (e) => {
        if(bookmark === '북마크하기'){
            setBookmark('북마크 완료');
            e.target.style.color = 'blue';
        }else if(bookmark === '북마크 완료'){
            setBookmark('북마크하기');
            e.target.style.color = 'red';
        }
        console.log(`현재 상태는 ${e.target.innerText}`);
    }

    return (
        <div>
            <aside className="aside_area">
                <div className="aside_div">
                    <header className="aside_header">
                        <div>
                        <h3>채용보상금</h3>
                        <div className="aside_compensation">
                            <ul>
                                <li>
                                    <h4>추천인</h4>
                                    <p><b>{props.compensation.slice(6)}</b></p>
                                </li>
                                <li>
                                    <h4>지원자</h4>
                                    <p><b>{props.compensation.slice(6)}</b></p>                
                                </li>
                            </ul>
                        </div>
                        </div>
                        <div className="aside_button">
                            <button className="aside_bookmark_button" onClick={bookmarkFunc} >{bookmark}</button>
                            <button className="aside_apply_button" onClick={applyFunc}>{apply}</button>
                        </div>
                            
                    </header>
                </div>
            </aside>
            
        </div>
  );
}

export default React.memo(ApplyingZone);