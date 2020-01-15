import React, {Component} from 'react';
import './App.css';
import Search from './Search/Search';
import BookCard from './bookCard/bookCard';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      printType: '',
      bookType: '',
      bookResults: ''
    }
  }

  searchQueryTerm(queryTerm) {
    this.setState({
      query: [...this.state.query, queryTerm]
    });
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${queryTerm}`)
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return response;
    })
    .then(response => response.json())
    .then(data => {
        const filteredBooks = data.items.filter(book => book.saleInfo.listPrice);
        const bookResults = filteredBooks.map((book, idx) => <BookCard book={filteredBooks[idx]} />);
        this.setState({
          bookResults: bookResults
        })
    })
    .catch(err => {
      console.log('error')
    });
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">Google Book Search</header>
        <Search query={this.state.query} handleSearch={queryTerm => this.searchQueryTerm(queryTerm)} />
        {this.state.bookResults}
      </div>
    );
  }
}