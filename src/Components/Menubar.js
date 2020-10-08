import React, {Component} from 'react';
import './Menubar.css'

class Menubar extends Component{
    render(){
        return(
            // 출발역 입력 받고, state에 보내주고
            // 도착역 입력 받고, state에 보내주고
            // 최소시간, 최소거리, 최소요금 선택 버튼
            <div className="menubar">
                <div className="search_area">
                    <div className="input_area">
                        {/* <form onSubmit={this.props.handleSubmit}> */}
                            
                            <input type="number" value={this.props.searchDep} onChange={this.props.handleSearchDepChange} />
                            <input type="number" value={this.props.searchArr} onChange={this.props.handleSearchArrChange} />
                            <button type="submit">제출</button>
                        {/* </form> */}
                    </div>
                </div>


                <div className="menubar_icon">
                    <i className="fas fa-home" style={this.iconStyle45px}></i>
                    <i className="fas fa-map-marked-alt" style={this.iconStyle45px}></i>
                    <i className="fas fa-directions" style={this.iconStyle50px}></i>
                    <i className="fas fa-subway" style={this.iconStyle50px}></i>
                </div>

                
                <h1>1234</h1>
            </div>
        );
    }
}

export default Menubar;
