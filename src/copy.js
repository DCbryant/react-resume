import React from 'react'
import SelfIntro from './SelfIntro'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const routes = [
  { path: '/',
    exact: true,
    sidebar: () => <div></div>,
    main: () => <h2>个人信息</h2>
  },
  { path: '/workGallery',
    sidebar: () => <div></div>,
    main: () => <h2>主要项目</h2>
  },
  { path: '/skill',
    sidebar: () => <div></div>,
    main: () => <h2>我的技能</h2>
  },
  { path: '/contact',
    sidebar: () => <div></div>,
    main: () => <h2>联系我</h2>
  },
  { path: '/qq',
    sidebar: () => <div></div>,
    main: () => <h2>qq</h2>
  }
]

const SidebarExample = () => (
  <Router>
    <div className="wrapper">
      <div className="sidebar">
        <div className="avater">
          <img src="https://ooo.0o0.ooo/2017/10/07/59d89655c997a.jpg" />
        </div>
        <div className="name">丁聪</div>
        <div>
          <ul className="menu">
            <li><Link to="/">个人</Link></li>
            <li><Link to="/workGallery">作品</Link></li>
            <li><Link to="/skill">技能</Link></li>
            <li><Link to="/contact">联系</Link></li>
            <li><Link to="/qq">QQ</Link></li>
          </ul>
          <div className="links">
            <a href="https://github.com/DCbryant"><img src="https://ooo.0o0.ooo/2017/10/07/59d8a07677a3b.png" /></a>
            <a href="https://github.com/DCbryant/myblog"><img src="https://ooo.0o0.ooo/2017/10/07/59d8a0a65dfad.png"/></a>
          </div>
          <div className="source">
            Open source:<a>GitHub</a>
          </div>
          <div className="copyright">&copy; dcbryant 2017</div>

          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </div>

        <div>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </div>
    </div>
  </Router>
)

export default SidebarExample











import React,{Component} from 'react'

export default class SelfIntro extends Component{

    render(){
        return(
            <div className="self-intro">
                <aside>
                    <div className="avater">
                        <img />
                        <p>丁聪</p>
                    </div>
                    <ul className="list">
                        <li><a>个人</a></li>
                        <li><a>作品</a></li>
                        <li><a>技能</a></li>
                        <li><a>联系</a></li>
                        <li><a>QQ</a></li>
                    </ul>
                    <div className="icons"></div>
                    <div>Open source:<a href="#">Github</a></div>
                    <div className="copyright">copyright dcbryant 2017</div>
                </aside>
            </div>
        )
    }
}