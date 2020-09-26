import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    
  };

  iconStyle = {
    fontSize: "45px"
  }

  render(){
    return (
      <div className="App">
        <div className="menubar">
          <div className="menubar_icon">
              <i className="fas fa-home" style={this.iconStyle}></i>
              <i className="fas fa-map-marked-alt" style={this.iconStyle}></i>
              <i className="fas fa-directions" style={this.iconStyle}></i>
              <i className="fas fa-subway" style={this.iconStyle}></i>
          </div>
        </div>

        <div class="inteface">
          <div class="menubar_active_button">
            <i class="fas fa-angle-right"></i>
          </div>

          <img src="./subway_img.PNG" alt="subway" />
        </div>
      </div>
    );
  }

}

export default App;
