import React from 'react';
import './Post.css';

export default class Post extends React.Component {

    constructor(props){
        super(props);





    }


    render(){



        return(
            <div className="post" style={{backgroundImage: "url('" + this.props.image + "')" }}>
            
                <div className="overlay">

                    <div className="post_type">
                        <h3 className="post_type_tag">{this.props.type}</h3>
                    </div>
                    <div className="post_info">
                        <h3>{this.props.subtitle}</h3>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.summary}</p>
                    </div>

                </div>
            </div>

        );

    }
}