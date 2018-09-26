import React, {Component} from 'react';
import './App.css';

class Author extends Component {
    render() {
      const authors = this.props.author;
      
      return (
        <div>
        {authors ? authors.map((a, index) => (<div key={index} className="book-authors">{a}</div>)) : <div></div>}
       </div>
      )
    }
}

export default Author;