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
    }else{
      _a = null;
    }
    return _a;
  }

  render(){
    return (
      <div className="App">
        {this.getMenubarComponent()}
        <div className="map">
          <div className="menubar_active_button">
            <i className="fas fa-angle-right" onClick={()=>{
              if(this.state.menubarActive === false){
                this.setState({
                  menubarActive: true
                })
              }else{
                this.setState({
                  menubarActive: false
                })
              }
            }}></i>
          </div>

          {/* <img src="./subway_img.PNG" alt="subway" /> */}
        </div>
      </div>
    );
  }

}

export default App;
