import React, {Component} from 'react';

class SubwayMap extends Component{
    render(){
        const subwayImgPath = {
            backgroundImage: `/images/subway_img_${this.props.lineNum}.png`
        }

        const setSubwayImg = (lineNum) => {  
            return <img src={subwayImgPath.backgroundImage} alt="지도" id="subway_img"/>                
        }

        return(    
            <div>
                {setSubwayImg(this.props.lineNum)}
            </div>
        );
    }
}

export default SubwayMap;