import React from 'react';
import './SearchBar.css';
import Search from 'react-icons/lib/fa/search';



export default class SearchBar extends React.Component {
  constructor(props){
    super(props);


  }

  render() {

      return (
        
			
            <form className="searchbar">
                <input type="text" name="search" placeholder="Type here to search photos" size = "40" autocomplete="off"/>
                <i className="search_icon"><Search/></i>
            </form>

      
    
      );

    
  }
}