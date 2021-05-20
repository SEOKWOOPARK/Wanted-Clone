import React, { useState, useEffect } from 'react';
import './ApplyingZone.css';
import {createStore, applyMiddleware} from 'redux';

const applyedList = [];
const bookmarkedList = [];

function ApplyingZone({props}){
    const [bookmark, setBookmark] = useState('북마크하기');
    const [apply, setApply] = useState('지원하기');

    const applyFunc = (e) => {
        if(apply === '지원하기'){
            setApply('지원 완료');
            e.target.style.color = 'hsla(0,0%,100%,.5)';
            e.target.style.backgroundColor = '#999';
            e.target.style.border = '#999';
            applyedList.push(
                {
                    companyName: props.companyName,
                    companyCover: props.companyCover,
                    role: props.role,
                    compensation: props.compensation,
                    location: props.location,
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
            const bookmarkObj = {
                companyName: props.companyName,
                companyCover: props.companyCover,
                role: props.role,
                compensation: props.compensation,
                location: props.location,
            }
            if(bookmarkedList.indexOf(bookmarkObj) === -1){
                bookmarkedList.push(bookmarkObj);
            }            
        }else if(bookmark === '북마크 완료'){
            setBookmark('북마크하기');
            for(let i = 0; i < bookmarkedList.length; i++){
                if(bookmarkedList[i].companyName === props.companyName){
                    bookmarkedList.splice(i, 1);                    
                }
            }
        }
    }

    useEffect(() => {
        console.log('북마크, 지원 상태 변화');
    }, [apply, bookmark])

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

export default ApplyingZone;
export {applyedList, bookmarkedList};