import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types'


/**
* React Component to Render a Book's Authors
* @author [Aron Roberts](https://github.com/robotros)
*/
class Author extends Component {
  render() {
    const authors = this.props.author;
    return (
      <div>
        {authors ? authors.map((a, index) => (<div key={index} className='book-authors'>{a}</div>)) : <div></div>}
      </div>
    )
  }
}

Author.propTypes = {
  /**
  * Array of Authors for a book
  */
  authors: PropTypes.array,
}

export default Author;
