import { Component } from "react"
import SingleBook from "./SingleBook"
import { Form, InputGroup, Row } from "react-bootstrap"



class BookList extends Component {

    state = {
        chosenBook: ""
    }
    render() {
    return (
        <>
        <InputGroup className="mb-3 container mx-auto">
        <InputGroup.Text id="inputGroup-sizing-default">
         Search a book
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Title"
          value={this.state.chosenBook}
          onChange={e => this.setState({chosenBook: e.target.value})}
        />
      </InputGroup>
      {this.state.chosenBook ? 
      <Row className="container mx-auto row-gap-5">
        {this.props.books.filter(book => <SingleBook key={this.props.asin} img={this.props.img} title={this.props.title} category={this.props.category})}
    </Row>
    }
    </>
    )
}
}
export default BookList