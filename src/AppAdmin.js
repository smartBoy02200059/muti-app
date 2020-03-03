import React from 'react'
import {DatePicker,Button} from 'antd'

class AppAdmin extends React.Component{

    render(){
        return(
            <div style={{background:'#9acef0', textAlign:'center',position:'absolute',width:'100%',height:'100%'}}>
                this is admin<br/>
                <select>
                    <option value="react">React</option>
                    <option value="redux">Redux</option>
                    <option value="mobx" selected>Mobx</option>
                </select>
                <p>
                    <a href='http://localhost:3000/about.html'>点我跳转到about页</a>
                </p>
                <Button>点击哦</Button>

            </div>
        )
    }

}
export default AppAdmin