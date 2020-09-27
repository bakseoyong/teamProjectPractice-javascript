import React, {Component} from 'react';
import './MenubarStyle.css'

class Menubar extends Component{
    render(){
        return(
            <div className="menubar">
                <div className="menubar_icon">
                    <i className="fas fa-home" style={this.iconStyle45px}></i>
                    <i className="fas fa-map-marked-alt" style={this.iconStyle45px}></i>
                    <i className="fas fa-directions" style={this.iconStyle50px}></i>
                    <i className="fas fa-subway" style={this.iconStyle50px}></i>
                </div>
            </div>
        );
    }
}

export default Menubar;
