import React,{Component} from 'react'
import './App.css'
import SelfIntro from './SelfIntro'
import WorkGallery from './WorkGallery'
import Skill from './Skill'
import Contact from './Contact'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'dcbryant'
    }
  }
  render() {
    return (
      <div className="App">       
          <Router>         
              <div className="contentBox">
                  <div className="sidebar">
                    <img className="avater" src="https://i.loli.net/2017/10/08/59da09d347561.jpg" alt="avater" />
                    <div className="name">{this.state.name}</div>
                    <ul className="nav">
                      <li><Link to="/">个人</Link></li>
                      <li><Link to="/works">作品</Link></li>
                      <li><Link to="/skill">技能</Link></li>
                      <li><Link to="/contact">联系</Link></li>
                    </ul>
                    <div className="links">
                      <a className="link" title="github" href="https://github.com/DCbryant"><img src="https://ooo.0o0.ooo/2017/10/07/59d8a07677a3b.png" alt="github" /></a>
                      <a className="link" title="blog" href="https://github.com/DCbryant/myblog"><img src="https://ooo.0o0.ooo/2017/10/07/59d8a0a65dfad.png" alt="blog"/></a>
                    </div>
                    <div className="source">
                      Open source :  <a href="">GitHub</a>
                    </div>
                  <div className="copyright">&copy; dcbryant 2017</div>
                  </div>            
                <div className="content"> 
                  <Route exact path="/" component={SelfIntro}/>
                  <Route path="/works" component={WorkGallery}/>
                  <Route path="/skill" component={Skill}/>
                  <Route path="/contact" component={Contact}/>
                </div>
            </div>
          </Router>
      </div>
    );
  }
}

export default App