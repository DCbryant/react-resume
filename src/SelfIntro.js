import React,{Component} from 'react'

export default class SelfIntro extends Component{

    render(){
        return(
            <div className="self-intro">
                <h1>个人信息</h1>
                <div className="information">
                    <p>意向职位：前端工程师</p>
                    <p>出生日期：1995年7月</p>
                    <p>性别：男</p>
                    <p>教育经历：长江大学</p>
                    <p>目标城市：北京/杭州/上海</p>
                    <p>联系电话：15717150620</p>
                    <p>qq:1515433745</p>
                    <p>email: dcbryant753@gmail.com</p>
                </div>
                <p className="self-assessment">
                    我是一个乐观向上、性格幽默、做事认真，热爱运动的人。 我喜欢研究所碰到的各种技术，热衷解决碰到的任何程序问题，不给自己设边界，有 Geek 精神。我有时间概念，能在约定时间内保证完成任务。我正在寻找一家公司希望加入一个以技术为驱动，从事前端开发工作，并且可以提升大型项目的驾驭能力，希望新工作有成长空间，技术上有挑战性，技术氛围够Geek，使人有成就感的互联网公司
                </p>
            </div>
        )
    }
}