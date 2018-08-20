import React from 'react';
import './Menu.css';
import UserWidget from './UserWidget';
import MenuToggle from './MenuToggle';
import SearchBar from './SearchBar';
import Nav from './Nav';




export default class Menu extends React.Component {
  constructor(props){
    super(props);

    this.state ={
        username: "Username Lastname",
        image_url: "https://mediamass.net/jdd/public/documents/celebrities/3503.jpg"
      }
  }

  render() {

      return (
        <div className="menu_layer">
            <div className="menu">	
                <MenuToggle />
                <UserWidget user_name={this.state.username} user_pic={this.state.image_url}/>
                
               

            </div>
            <div className="v_menu">

            
            </div>
        </div>
    
      );

    
  }
}