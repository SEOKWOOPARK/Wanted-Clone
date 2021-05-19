import React, { Component } from 'react';
import ApplyingZone from './component/ApplyingZone/ApplyingZone';
import './Detail.css';

function printingList(array){
    const input = array;
    return (
        <ul>
            {input.map((i) => {
                return (
                    <div>
                        <div>- {i}</div>
                        <br />
                    </div>
                );
            })}
        </ul>
    );
}

class Detail extends Component {
    componentDidMount(){
        const {location, history} = this.props;
        
        if (location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const {location} = this.props;
        
        if (location.state){
            return (
                <div className="detail_page">
                    <div className="detail_introduction">
                        <img src={location.state.companyCover} alt="" />
                        <div className="job_description">
                            <h2>{location.state.role}</h2>
                            <br />
                            <div className="job_companyname">{location.state.companyName}</div>
                            <br />
                            <div className="job_start">{location.state.detailPage.introduction}</div>
                            <br />
                            <div className="job_roles">
                                <h6>주요 업무</h6>
                                <section>
                                    {printingList(location.state.detailPage.mainRole)}
                                </section>
                            </div>
                            <div className="job_qualification">
                                <h6>자격 요건</h6>
                                <section>
                                    {printingList(location.state.detailPage.qualification)}
                                </section>
                            </div>
                            <div className="job_preference">
                                <h6>우대 사항</h6>
                                <section>
                                    {printingList(location.state.detailPage.preference)}
                                </section>
                            </div>
                            <div className="job_merit">
                                <h6>혜택 및 복지</h6>
                                <section>
                                    {printingList(location.state.detailPage.merit)}
                                </section>
                            </div>    
                        </div>        
                    </div>
                    <div>
                        <ApplyingZone className="applying_button" props={location.state}/>
                    </div>        
                </div>
            );
        }else{
            return 'rendering is impossible';
        }	
    }
}

export default Detail;
