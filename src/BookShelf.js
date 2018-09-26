import React, {Component} from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'

class BookShelf extends Component {
    render() {
      const shelf ={
        shelfTitle: this.props.title,
        books:this.props.books,
      }

        
      return (
        <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf.shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                       {shelf.books.map((book, index) => (
                          <li key={index}>
                            <Book details={book} onUpdateShelf={this.props.onUpdateShelf}/>
                          </li>))}
                    </ol>
                  </div>
                </div>
);
      
  }
}

export default BookShelf;