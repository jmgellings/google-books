import React, {Component} from 'react';

export default class bookCard extends Component {
  render() {
    const book=this.props.book;
    console.log(book);
    return(
      <div className="bookItem">
        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book cover"></img>
        <div className="bookInfo">
          <h1>{book.volumeInfo.title}</h1>
          <p>Author: {book.volumeInfo.authors}</p>
          <p>Price: ${book.saleInfo.listPrice.amount}</p>
          <p>{book.searchInfo.snippet}</p>
        </div>
      </div>
    )
  }
}

/*const bookResults = filteredBooks.map(book => {
          let obj = {
            title: book.volumeInfo.title,
            snippet: book.searchInfo.textSnippet,
            author: book.volumeInfo.authors,
            price: book.saleInfo.listPrice,
            smallThumbnail: book.volumeInfo.imageLinks.smallThumbnail,
            eBook: book.saleInfo.isEbook
          }
          return obj;
        })*/