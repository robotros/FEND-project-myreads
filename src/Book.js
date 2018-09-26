import React, {Component} from 'react';
import './App.css';
import BookShelfChanger from './BookShelfChanger'
import Author from './Author'

class Book extends Component {
    render() {
      const details = this.props.details
                    
      return (
        <div className="book">
          <div className="book-top">
            <img className="book-cover" alt={details.title} src={details.imageLinks.thumbnail} ></img>
           <BookShelfChanger book={details} onUpdateShelf={this.props.onUpdateShelf}/>
      </div>
      <div className="book-title">{details.title}</div>
      <Author author={details.authors}/>
      
  </div>
);
      
  }
}

export default Book;
