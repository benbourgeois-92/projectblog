import React from 'react';
import './UserWidget.css'


export default class UserWidget extends React.Component {



  render() {

    return (
      <button className="current_user">

			  <img className="user_pic" src={this.props.user_pic} alt="User"/>
			  <p className="user_name">{this.props.user_name}</p>

	  </button>
    );
  }
}
