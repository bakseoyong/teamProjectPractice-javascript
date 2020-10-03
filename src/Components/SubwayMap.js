import React, {Component} from 'react';
import subway_img from './images/subway_img.PNG';

class SubwayMap extends Component{
    render(){
        return(
            <div>
                <img src={subway_img} alt="지도" id="subway_img"/>
            </div>
        );
    }
}

export default SubwayMap;