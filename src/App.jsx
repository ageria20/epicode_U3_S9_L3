import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './component/MyNav';
import MyFooter from './component/MyFooter';
import AllTheBooks from './component/AllTheBooks';
import SingleBook from './component/SingleBook'
import fantasy from './data/fantasy.json';
import history from './data/history.json';
import horror from './data/horror.json';
import romance from './data/romance.json';
import sciFi from './data/scifi.json';
import BookList from './component/BookList';
import { Component } from 'react';
import { NavDropdown } from "react-bootstrap";


class App extends Component {
  state = {
    libraries: [...fantasy, ...history, ...horror, ...romance, ...sciFi]
  }

  render() {
  return (
    <>
     <MyNav categories={this.state.libraries.map(library => <NavDropdown.Item href="#action3">{library.category}</NavDropdown.Item>)}/>
    {/* <SingleBook asin={romance[2].asin} img={romance[2].img} title={romance[2].title} category={romance[2].category} price={romance[2].price}/> */}
    <BookList books={fantasy}/>
    <MyFooter/>
    </>
  );
}
}

export default App;
