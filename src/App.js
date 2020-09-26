import React, {Component} from 'react';
import Menubar from './Components/Menubar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    menubarActive: false,
  };

  iconStyle45px = {
    fontSize: "45px"
  }

  iconStyle50px = {
    fontSize: "50px"
  }

  getMenubarComponent(){
    var _a = null;
    if(this.state.menubarActive === true){
      _a = <Menubar></Menubar>
    }
    return _a;
  }

  render(){
    return (
      <div className="App">
        <div className="menubar">
          <div className="menubar_icon">
              <i className="fas fa-home" style={this.iconStyle45px}></i>
              <i className="fas fa-map-marked-alt" style={this.iconStyle45px}></i>
              <i className="fas fa-directions" style={this.iconStyle50px}></i>
              <i className="fas fa-subway" style={this.iconStyle50px}></i>
          </div>
        </div>
        {this.getMenubarComponent()}
        <div className="map">
          <div className="menubar_active_button">
            <i className="fas fa-angle-right" onClick={()=>{
              this.setState({
                menubarActive : true
              })
            }}></i>
          </div>

          {/* <img src="./subway_img.PNG" alt="subway" /> */}
        </div>
      </div>
    );
  }

}

export default App;
