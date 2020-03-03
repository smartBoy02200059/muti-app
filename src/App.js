import React from 'react';
import {DatePicker,Input} from 'antd'
import './App.css';

function App() {
  return (
    <div className="App" style={{background:'#c4c649', height:'100%',width:'100%'}}>
      Hello Qway<br/>
        <DatePicker/><br/>
        <Input placeholder='please input your phoneNumber' style={{marginTop:'20px',flex:'auto',width:'300px'}}/>
        <p style={{marginTop:'20px'}}>
            <a href="http://localhost:3000/admin.html">点我跳转到admin页</a>
        </p>
    </div>
  );
}

export default App;
