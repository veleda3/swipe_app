import React, { Component } from 'react';
import { connect } from 'react-redux';


 class BookDetail extends Component {

  render() {
    if(!this.props.book) {
      return <div> Please pick a book </div>
    }

    return(
      <div> {this.props.book.title} </div>
    )
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}

export default connect (mapStateToProps)(BookDetail)
