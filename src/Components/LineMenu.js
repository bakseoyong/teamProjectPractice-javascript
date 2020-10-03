import React, {Component} from 'react';
import './LineMenu.css'

class LineMenu extends Component{

    render(){ 

        return(
            <div>
                <ul className="listLine">
                    <li className="listLineAll">
                        <img src='/images/LineAllBtn.png' alt="전체노선도버튼" onClick={() => this.props.setLineNum(0)}/>
                    </li>
                    <li className="listLine1">
                        <img src='/images/Line1Btn.png' alt="1호선버튼" onClick={() => this.props.setLineNum(1)}/>
                    </li>
                    <li className="listLine2">
                        <img src='/images/Line2Btn.png' alt="2호선버튼" onClick={() => this.props.setLineNum(2)}/>
                    </li>
                    <li className="listLine3">
                        <img src='/images/Line3Btn.png' alt="3호선버튼" onClick={() => this.props.setLineNum(3)}/>
                    </li>
                    <li className="listLine4">
                        <img src='/images/Line4Btn.png' alt="4호선버튼" onClick={() => this.props.setLineNum(4)}/>
                    </li>
                    <li className="listLine5">
                        <img src='/images/Line5Btn.png' alt="5호선버튼" onClick={() => this.props.setLineNum(5)}/>
                    </li>
                    <li className="listLine6">
                        <img src='/images/Line6Btn.png' alt="6호선버튼" onClick={() => this.props.setLineNum(6)}/>
                    </li>
                    <li className="listLine7">
                        <img src='/images/Line7Btn.png' alt="7호선버튼" onClick={() => this.props.setLineNum(7)}/>
                    </li>
                    <li className="listLine8">
                        <img src='/images/Line8Btn.png' alt="8호선버튼" onClick={() => this.props.setLineNum(8)}/>
                    </li>
                    <li className="listLine9">
                        <img src='/images/Line9Btn.png' alt="9호선버튼" onClick={() => this.props.setLineNum(9)}/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default LineMenu;
