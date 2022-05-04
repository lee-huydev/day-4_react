import React, { useState } from 'react';
import './App.css'
import Div from './components/Div/Div';
import Button from './components/Button/Button';
function App() {
   const [text, setText] = useState('Show')
   const handleOnclick = (e) => {
      alert(e.target.innerText)
   }
   return (
      <>
      <Div
       shape={'square'} 
       backgroundColor={'#30BE96'}
       />
       <Button 
       text={text}
       onClick={()=> text === 'Show' ? setText('Hidden') : setText('Show')}
       />
       <Button
        text={'Create'}
        onClick={handleOnclick}
        />
       <Button
        text={'Change'}
        onClick={handleOnclick}
        />
       <Button
        text={'Update'}
        onClick={handleOnclick}
        />
       <Button
        text={'Delete'}
        onClick={handleOnclick}
        />
       <Button
        text={'Submit'}
        onClick={handleOnclick}
        />
      </>
      
   )
}

export default App;
