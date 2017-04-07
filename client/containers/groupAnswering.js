import React, { Component } from 'react';
import { connect } from 'react-redux';


class GroupAnswering extends Component {
  render() {
    console.log(this.props.questionList);
    return (
      <h1>Hello Group!</h1>
    );
  }
}

function mapStateToProps(state) {
  return {
    questionList: state.questionList,
  };
}

GroupAnswering.propTypes = {
  questionList: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(GroupAnswering);
