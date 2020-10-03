import React, {Component} from 'react';
import LineMenu from './Components/LineMenu';
import Menubar from './Components/Menubar';
import SubwayMap from './Components/SubwayMap';
import './App.css';

class App extends Component {
  state = {
    menubarActive: false,
    lineNum : 0
  };

  getMenubarComponent(){
    var _a = null;
    if(this.state.menubarActive === true){
      _a = <Menubar></Menubar>
    }else{
      _a = null;
    }
    return _a;
  }

  menubarActive = () => {
    if(this.state.menubarActive === false){
      this.setState({
        menubarActive: true
      })
    }else{
      this.setState({
        menubarActive: false
      })
    }
  }

  setLineNum = (changeLineNum) => {
      this.setState({
        lineNum : changeLineNum
      })
  }
  
  render(){
    return (
      <div>
        <div className="map">
          {/* 메뉴바 활성화 / 비활성화 함수 */}
          {this.getMenubarComponent()}

          {/* onClick{this.menubarActive()} 로 작성하면 렌더링 될때마다 실행된다. */}
          <div className="menubarActiveButton" onClick={() => this.menubarActive()}>
            <i className="fas fa-caret-right" ></i>
          </div>

          {/* 지하철 이미지를 가져오는 컴포넌트 */}
          <SubwayMap lineNum={this.state.lineNum}/>

          {/* 각 호선별 버튼을 가져오는 컴포넌트 */}
          <LineMenu setLineNum={this.setLineNum}/>

          <div>
            <button type="button" onClick={()=>{
              var Img = document.getElementById("subway_img")
              var currWidth = Img.clientWidth;
              if(currWidth === 2500) return false;
              else {
                Img.style.width = (currWidth + 100) + "px";
              }
            }}>+</button>
            <button type="button" onClick={()=>{
              var Img = document.getElementById("subway_img")
              var currWidth = Img.clientWidth;
              if(currWidth === 100) return false;
              else {
                Img.style.width = (currWidth - 100) + "px";
              }
            }}>-</button>
          </div>

        </div>
      </div>
    );
  }

}

export default App;