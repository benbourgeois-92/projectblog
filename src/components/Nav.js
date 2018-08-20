import React from 'react';
import './Nav.css';
import Home from 'react-icons/lib/ti/home';
import User from 'react-icons/lib/ti/user';
import Comment from 'react-icons/lib/md/chat-bubble';




export default class Nav extends React.Component {
  constructor(props){
    super(props);




  }


  render() {

      return (
          <nav>        
            <Home className="button"/>
            <User className="button"/>
            <Comment className="button" />
        </nav>
          
      );

    
  }
}
