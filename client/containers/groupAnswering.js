import React, { Component } from 'react';
import { connect } from 'react-redux';


class GroupAnswering extends Component {

  renderQuestionAlternative(question) {
    return question.alternatives.map( (alternative) => {
      return (
        <div
          key={alternative.alternativeDescription}
        >
          {alternative.alternativeDescription}
        </div>
      )
    })
  }

renderQuestions() {
  const questions = this.props.questionList[0].questions;
  return questions.map( (question) => {
    return (
      <li
        key={question.description}
      >
        <h5>{question.description}</h5>
        <br />
        {this.renderQuestionAlternative(question)}
      </li>
    );
  })

}

  render() {
    return (
      <ul>
        {this.renderQuestions()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    questionList: state.questionList,
  };
}

GroupAnswering.propTypes = {
  questionList: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(GroupAnswering);
