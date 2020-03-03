import React from 'react'

class AppAbout extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{background:'#ff8ef8', height:'100%',width:'100%'}}>
                <p>该应用是通过Create-react-app脚手架创建的react应用，通过eject暴露webpack配置，通过修改配置来实现多页面支持</p>
                <p>该页面是测试页面中的about页面，旨在介绍本应用</p>
                <p>about页面</p>
            </div>
        )
    }
}

export default AppAbout