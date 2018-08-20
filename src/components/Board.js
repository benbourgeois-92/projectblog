import React from 'react';
import './Board.css';
import Post from './Post.js';
import Post_small from './Post_small.js';

import ContestPreview from './ContestPreview.js';

export default class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            blogPosts: [],
        };

    }
    componentDidMount(){
       fetch('/posts')
       .then(res => res.json())
       .then(blogPosts => this.setState({ blogPosts }));

    }


  
    render(){
      
        const image_url = "https://theknow.denverpost.com/wp-content/uploads/2018/01/Peak_Awareness_Capitol_Peak_2HR4139-1080x720.jpg";
        return (
            <div className="board">{
                this.state.blogPosts.map(
                    function(post, index){

                        var BSSB = [true, false, false, true, true, false, false, true, true, false, false, true, true, false, false, true];
                        var postID = 'P' + index;

                        if(BSSB[index]){
                            return <Post id={postID} type={post.type} image={post.imageURL} subtitle={post.subtitle} title={post.title} summary={post.summary}/>


                        }else{
                           return  <Post_small id={postID} type={post.type} image={post.imageURL} subtitle={post.subtitle} title={post.title} summary={post.summary}/>


                        }
                    
                       

                
                    }
                )
            
            
            
            
            }</div>
       
    );
    }


}