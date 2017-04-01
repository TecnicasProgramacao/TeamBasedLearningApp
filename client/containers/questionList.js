import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionList extends Component {

  renderQuestionList() {
    return this.props.questionList.map( (list) => {
    return list.questions.map( (question) => {
        return (
          <li
            key={question.description}
          >
            <h5>{question.description}</h5>
            <br />
            A) {question.alternatives[0].alternativeDescription}
            <br />
            B) {question.alternatives[1].alternativeDescription}
            <br />
            C) {question.alternatives[2].alternativeDescription}
            <br />
            D) {question.alternatives[3].alternativeDescription}
          </li>
        );
      })

    });
  }
  render() {
    return (
      <ul>
        {this.renderQuestionList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    questionList: state.questionList,
  }
}

export default connect(mapStateToProps)(QuestionList);
