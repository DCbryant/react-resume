import React,{Component} from 'react'

export default class WorkGallery extends Component{
    render(){
        return(
            <div className="work-gallery">
                <h2>主要项目</h2>
                <ul className="work-items">
                    <li><a href="https://github.com/DCbryant/react-notebook">
                        <img src="https://i.loli.net/2017/10/10/59dc62b4d3a2b.png" />
                        <div className="item-wrapper">
                            <h3>react记事本</h3>
                            <p>功能介绍：一个操作简便的Todolist应用，支持多用户在线注册，登陆，数据同步到云，支持增删查功能</p>
                            <p>技术细节：利用react构建，将该应用拆分成多个组件。同时在应用复杂时，仍使数据传递呈现清晰的逻辑，包括父子通信等等，将每条TodoItem存储到leancloud，用来存取数据</p>
                            <p>使用技能：react leancloud</p>               
                        </div>   
                    </a></li>
                    <li><a href="https://github.com/DCbryant/music-demo">
                        <img src="https://i.loli.net/2017/10/10/59dc615149bb0.png" />
                        <div className="item-wrapper">
                            <h3>网易云音乐</h3>
                            <p>功能介绍：利用jquery模仿的移动端网易云音乐，支持最新音乐，热歌榜，搜索，播放，暂停、歌词滚动显示功能</p>
                            <p>技术细节：歌曲的存取都用到了leancloud，界面的展示利用到了jquery，自适应实现利用到了vw</p>
                            <p>使用技能：jquery leancloud</p>   
                        </div> 
                    </a></li>
                    <li><a href="https://github.com/DCbryant/crawler">
                        <img src="https://i.loli.net/2017/10/10/59dc63c7eced3.png" />
                        <div className="item-wrapper">
                            <h3>爬取房源信息</h3>
                            <p>功能介绍：利用nodejs爬取到北京豆瓣小组的房源信息</p>
                            <p>技术细节：利用request爬取数据，先获取导航页URL以及数据，用jsdom模块解析dom，利用fs模块将所有信息存到data.json</p>
                            <p>使用技能：nodejs </p>   
                        </div> 
                    </a></li>
                    <li><a href="https://github.com/DCbryant/Don-t-StepOnWhitePiece">
                        <img src="https://oapy20uns.qnssl.com/donttouchwhite.jpg" />
                        <div className="item-wrapper">
                            <h3>别踩白块儿</h3>
                            <p>功能介绍：利用canvas和原生js实现的别踩白块儿小游戏</p>
                            <p>技术细节：每一行方块都用0或1的数组表示，点击到黑色方块就将它颜色变为白色，否则游戏结束</p>
                            <p>使用技能：canvas js</p> 
                        </div> 
                    </a></li>
                    <li><a href="https://github.com/DCbryant/js-components">
                        <img src="https://i.loli.net/2017/10/10/59dc648512abd.png" />
                        <div className="item-wrapper">
                            <h3>面向对象组件</h3>
                            <p>功能介绍：使用面向对象思想，实现了常见页面效果，包括drag、carousel、tab、music等等8个组件</p>
                            <p>技术细节：每个组件都是先实现其基本功能，然后用面向对象的方法封装</p>
                            <p>使用技能：面向对象 js jquery</p> 
                        </div> 
                    </a></li>
                    <li><a href="https://dcbryant.github.io/react-resume/build/">
                        <img src="https://i.loli.net/2017/10/10/59dc64fa60b13.png" />
                        <div className="item-wrapper">
                            <h3>react-resume</h3>
                            <p>功能介绍：一个为了面试制作的在线简历，从各方面展示自我</p>
                            <p>技术细节：用create-react-app构造，其中用到了react-router react-echarts</p>
                            <p>使用技能：react react-router react-echarts</p> 
                        </div> 
                    </a></li>
                </ul>
            </div>
        )
    }
}