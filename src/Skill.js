import React,{Component} from 'react'
import Hexagonal from './Hexagonal'
export default class Skill extends Component{

    render(){
        return(
            <div className="skill">
                <h2>我的技能</h2>
                <Hexagonal/>
                <div className="skillWrapper">
                    <ul className="skillPoint">
                        <h3>能力技能</h3>
                        <li><p>熟悉HTML、CSS,对Web标准和标签语义化有一定的理解能够编写比较语义化的HTML，模块化的css，完成比较复杂的布局</p></li>
                        <li><p>熟悉HTML5和CSS3，并能熟练使用新特性，比如flex</p></li>
                        <li><p>能利用js和jquery实现常见效果，熟悉事件模型、DOM 操作、ajax、jsonp、闭包等知识</p></li>
                        <li><p>能运用模块化、面向对象的方式编程</p></li>
                    </ul>
                    <ul className="advantages">
                        <h3>优势特长</h3>
                        <li><p>熟悉react与es6，es6常见的能够熟练使用，了解node</p></li>
                        <li><p>良好的代码风格，对自己代码质量有高要求，注释清晰</p></li>
                        <li><p>对前端安全、性能优化有一定的了解</p></li>
                        <li><p>有解决问题的能力，乐于交流和表达</p></li>
                        <li><p>热爱写代码，喜欢钻研新技术,觉得写代码很有趣并乐在其中</p></li>
                        <li><p>乐于学英语，明白英语好才能够称为大牛，梦想成为大牛</p></li>
                    </ul>
                </div>
            </div>
            
        )
    }
}