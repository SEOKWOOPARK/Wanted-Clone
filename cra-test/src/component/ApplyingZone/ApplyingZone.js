import React, { useState } from 'react';
import './ApplyingZone.css'
import {createStore, applyMiddleware} from 'redux';

const applyedList = [];

function ApplyingZone({props}){
    const date = new Date(); // 지원한 시간
    
    // const bookmarkedList = [];
    const [apply, setApply] = useState('지원하기');
    const [bookmark, setBookmark] = useState('북마크하기');

    const applyFunc = (e) => {
        if(apply === '지원하기'){
            setApply('지원 완료');
            e.target.style.color = 'hsla(0,0%,100%,.5)';
            e.target.style.backgroundColor = '#999';
            e.target.style.border = '#999';
            applyedList.push(
                {
                    companyName: props.companyName,
                    role: props.role,
                    time: date,
                }
            );
        }else if(apply === '지원 완료'){
            setApply('지원하기');
            e.target.style.backgroundColor = '#36f';
            e.target.style.color = '#fff';
            applyedList.pop();
        }
        console.log(applyedList);
    }

    const bookmarkFunc = (e) => {
        if(bookmark === '북마크하기'){
            setBookmark('북마크 완료');
            e.target.style.color = 'blue';
        }else if(bookmark === '북마크 완료'){
            setBookmark('북마크하기');
        }
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
                                    <p>{props.compensation.slice(6)}</p>
                                </li>
                                <li>
                                    <h4>지원자</h4>
                                    <p>{props.compensation.slice(6)}</p>                
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
export {applyedList};