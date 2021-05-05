import React, {Component} from 'react';
import ApplyingZone from './component/ApplyingZone/ApplyingZone';
import './Detail.css';

function printingList(arr){
    const input = arr;
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
                    <div>
                        <div>
                            <img src={location.state.companyCover} alt="" />
                        </div>
                        <div className="job_description">
                            <h2>{location.state.role}</h2>
                            <br />
                            <div>{location.state.companyName}</div>
                            <br />
                            <section>{location.state.detailPage.introduction}</section>
                            <br />
                            <div className="job_roles">
                                <h3>주요 업무</h3>
                                {printingList(location.state.detailPage.mainRole)}
                            </div>
                            <div className="job_qualification">
                                <h3>자격 요건</h3>
                                {printingList(location.state.detailPage.qualification)}
                            </div>
                            <div className="job_preference">
                                <h3>우대 사항</h3>
                                {printingList(location.state.detailPage.preference)}
                            </div>
                            <div className="job_merit">
                                <h3>혜택 및 복지</h3>
                                {printingList(location.state.detailPage.merit)}
                            </div>
                        </div>
                    </div>
                    <div>
                        <ApplyingZone className="applying_button" props={location.state}/>
                    </div>
                </div>
            );
        }else{
            return null;
        }	
    }
}

export default Detail;