import React, {Component} from 'react';
import subway_img from './images/subway_img.PNG';
import LineMenu from './Components/LineMenu';
import Menubar from './Components/Menubar';
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
      <div className="map">

        {this.getMenubarComponent()}

        <div>
          <img src={subway_img} alt="지도" id="subway_img"/>
        </div>

        <div className="menubar_active_button">
          <i className="fas fa-caret-right" onClick={()=>{
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
        
        <div>
          <LineMenu />
        </div>

        <div>
          <button type="button" onClick={()=>{
            var Img = document.getElementById("subway_img")
            var currWidth = Img.clientWidth;
            if(currWidth == 2500) return false;
            else {
              Img.style.width = (currWidth + 100) + "px";
            }
          }}>+</button>
          <button type="button" onClick={()=>{
            var Img = document.getElementById("subway_img")
            var currWidth = Img.clientWidth;
            if(currWidth == 100) return false;
            else {
              Img.style.width = (currWidth - 100) + "px";
            }
          }}>-</button>
        </div>

      </div>
    );
  }

}

export default App;
