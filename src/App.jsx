import React from 'react';
import morning from './images/morning.jpg'
import afternoon from './images/afternoon.jpg'
import goodnight from './images/goodnight.jpg'

function App(){

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssStyle = { 
  fontSize: '150%'
};

const imageStyle = {
  backgroundSize: 'cover',                   
  backgroundRepeat:   'no-repeat',
  backgroundPosition: 'center center',
 };

if (curDate >=1 && curDate < 12){
greeting = "Good Morning";
cssStyle.color = "#4ad5ff";
imageStyle.backgroundImage = `url(${ morning })`;

} else if (curDate >= 12 && curDate < 19){
greeting = "Good Afternoon";
cssStyle.color = "#ffff42";
imageStyle.backgroundImage = `url(${ afternoon })`;
}

else {
  greeting = "Good Night";
  cssStyle.color = "#ffffff";
  imageStyle.backgroundImage = `url(${ goodnight })`;
}

return (
    <>
    <div style = { imageStyle }>
    <h1>
      Hello Everyone,<span style = { cssStyle }> { greeting } </span>
    </h1>
  </div>
  </>
)

}

export default App;