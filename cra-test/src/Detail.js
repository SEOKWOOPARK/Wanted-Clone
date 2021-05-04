import React, {Component} from 'react';
import ApplyingZone from './component/ApplyingZone/ApplyingZone';
import './Detail.css';

class Detail extends Component {
    componentDidMount(){
        const {location, history} = this.props;
        if (location.state === undefined){
            history.push('/');
        }
    }
    render(){
        const {location} = this.props;
        const roleArray = location.state.detailPage.mainRole;
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
                            <h2>
                                {roleArray.map}
                            </h2>
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