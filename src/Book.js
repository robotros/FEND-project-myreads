import React, {Component} from 'react';
import './App.css';
import BookShelfChanger from './BookShelfChanger'
import Author from './Author'
import PropTypes from 'prop-types'


/**
* React Component to Render a Book
* @author [Aron Roberts](https://github.com/robotros)
*/
class Book extends Component {

  render() {
    const details = this.props.details
    // placeholder image from: https://blog.springshare.com/2010/02/03/no-cover-art-placeholder-images/
    const noCoverArt ='http://lgimages.s3.amazonaws.com/nc-md.gif'

    return (
      <div className='book'>
        <div className='book-top'>
          <img className='book-cover' alt={details.title} src={details.imageLinks ? details.imageLinks.thumbnail : noCoverArt} ></img>
          <BookShelfChanger
            book={details}
            onUpdateShelf={this.props.onUpdateShelf}/>
        </div>
        <div className='book-title'>{details.title}</div>
        <Author author={details.authors}/>
      </div>
    );

  }
}

Book.propTypes = {
  /**
  * Function to Change shelf of a book
  */
  onUpdateShelf: PropTypes.func.isRequired,
  /**
  * A book
  */
  details: PropTypes.object.isRequired,
}


export default Book;
