import React,{Component} from 'react'

export default class SelfIntro extends Component{
    render(){
        return(
            <div className="concat">
                <div className="Qr-code">
                    <figure>
                        <img src="https://i.loli.net/2017/10/08/59da3914436c6.jpg" alt="微信二维码" />
                    </figure>
                    <figure>
                        <img src="https://i.loli.net/2017/10/08/59da391302512.jpg" alt="qq二维码" />
                    </figure>
                </div>
                <form className="send-email" action="#" method="get">
                    <h1>Send me an email</h1>
                    <div className="username">
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="email">
                        <input type="text" placeholder="example@mail.com" />
                    </div>
                    <div className="email-content">
                        <textarea placeholder="期待您的邮件" cols="5"></textarea>
                    </div>
                    <input type="submit" value="SEND" />
                </form>
            </div>
        )
    }
}