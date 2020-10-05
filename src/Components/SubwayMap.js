import React, {Component} from 'react';

class SubwayMap extends Component{
    render(){
        
        const setSubwayImg = (lineNum) => {
            if(lineNum === 0){
                return <img src='/images/subway_img_0.png' alt="지도" id="subway_img"/>
            }else if(lineNum === 1){
                return <img src='/images/subway_img_1.png' alt="1호선지도" id="subway_img_1"/>
            }else if(lineNum === 2){
                return <img src='/images/subway_img_2.PNG' alt="2호선지도" id="subway_img_2"/>
            }else if(lineNum === 3){
                return <img src='/images/subway_img_3.png' alt="3호선지도" id="subway_img_3"/>
            }else if(lineNum === 4){
                return <img src='/images/subway_img_4.png' alt="4호선지도" id="subway_img_4"/>
            }else if(lineNum === 5){
                return <img src='/images/subway_img_5.png' alt="5호선지도" id="subway_img_5"/>
            }else if(lineNum === 6){
                return <img src='/images/subway_img_6.png' alt="6호선지도" id="subway_img_6"/>
            }else if(lineNum === 7){
                return <img src='/images/subway_img_7.png' alt="7호선지도" id="subway_img_7"/>
            }else if(lineNum === 8){
                return <img src='/images/subway_img_8.png' alt="8호선지도" id="subway_img_8"/>
            }else if(lineNum === 9){
                return <img src='/images/subway_img_9.png' alt="9호선지도" id="subway_img_9"/>
            }
        }

        return(    
            <div>
                {setSubwayImg(this.props.lineNum)}
            </div>
        );
    }
}

export default SubwayMap;