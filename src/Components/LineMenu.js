import React, {Component} from 'react';
import './LineMenuStyle.css'
import Line1Btn from './images/Line1Btn.png';
import Line2Btn from './images/Line2Btn.png';
import Line3Btn from './images/Line3Btn.png';
import Line4Btn from './images/Line4Btn.png';
import Line5Btn from './images/Line5Btn.png';
import Line6Btn from './images/Line6Btn.png';
import Line7Btn from './images/Line7Btn.png';
import Line8Btn from './images/Line8Btn.png';
import Line9Btn from './images/Line9Btn.png';


class LineMenu extends Component{
    render(){
        return(
            <ul className="listLine">
                <li className="listLine1">
                    <img src={Line1Btn} alt="1호선버튼"/>
                </li>
                <li className="listLine2">
                    <img src={Line2Btn} alt="2호선버튼"/>
                </li>
                <li className="listLine3">
                    <img src={Line3Btn} alt="3호선버튼"/>
                </li>
                <li className="listLine4">
                    <img src={Line4Btn} alt="4호선버튼"/>
                </li>
                <li className="listLine5">
                    <img src={Line5Btn} alt="5호선버튼"/>
                </li>
                <li className="listLine6">
                    <img src={Line6Btn} alt="6호선버튼"/>
                </li>
                <li className="listLine7">
                    <img src={Line7Btn} alt="7호선버튼"/>
                </li>
                <li className="listLine8">
                    <img src={Line8Btn} alt="8호선버튼"/>
                </li>
                <li className="listLine9">
                    <img src={Line9Btn} alt="9호선버튼"/>
                </li>
            </ul>
        );
    }
}

export default LineMenu;
