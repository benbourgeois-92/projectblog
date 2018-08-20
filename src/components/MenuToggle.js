import React from 'react';
import './MenuToggle.css';
import TiThMenu from 'react-icons/lib/ti/th-menu';
import TiTimes from 'react-icons/lib/ti/times';
import './Nav.css';
import Home from 'react-icons/lib/ti/home';
import User from 'react-icons/lib/ti/user';
import Comment from 'react-icons/lib/md/chat-bubble';
import Search from 'react-icons/lib/fa/search';



export default class MenuToggle extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        clicked: false
    }


    this.toggle = this.toggle.bind(this);

  }

  toggle(){

    if(this.state.clicked){
      this.setState({
        clicked: false
      });
    }else{
      this.setState({
        clicked: true
      });

    }

  }

  render() {

    if(this.state.clicked){
      return (
        <nav>
          <TiTimes onClick={this.toggle} className="menu_toggle"/>
          <Home className="button"/>
          <User className="button"/>
          <Comment className="button" />
          <Search className="button"/>
        </nav>
      );

    }else{
      return (
        <nav>
        
        <TiThMenu onClick={this.toggle} className="menu_toggle" />
        </nav>
      );
      
    }
  }
}
