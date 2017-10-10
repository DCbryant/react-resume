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
                        <li><p>熟悉HTML、CSS、页面架构和布局，对Web标准和标签语义化有深入理解</p></li>
                        <li><p>熟悉Ajax、JavaScript、jQuery、JSON等前端技术</p></li>
                        <li><p>了解ECMA5的标签规范以及HTML5新标签及CSS3样式及动画</p></li>
                        <li><p>熟悉原生 JS 和 jQuery,利用 JS 和 jQery 实现常见效果，掌握事件模型、DOM 操作、ajax、jsonp、闭包、 原型链、面向对象、封装等知识</p></li>
                        <li><p>熟悉js异步知识</p></li>
                    </ul>
                    <ul className="advantages">
                        <h3>优势特长</h3>
                        <li><p>熟悉react与es6，了解node</p></li>
                        <li><p>良好的代码风格，对自己代码质量有高要求，注释清晰</p></li>
                        <li><p>良好的逻辑思维能力和团队合作能力，有快速分析和解决问题的能力</p></li>
                        <li><p>有解决问题、钻研新技术的兴趣和能力，善于交流和表达</p></li>
                        <li><p>热爱学习，热爱写代码，喜欢钻研新技术</p></li>
                        <li><p>了解常见的dos命令</p></li>
                    </ul>
                </div>
            </div>
            
        )
    }
}