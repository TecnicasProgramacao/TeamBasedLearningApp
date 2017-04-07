import React, { Component } from 'react';
import { connect } from 'react-redux';


class GroupAnswering extends Component {

  renderQuestionAlternative(question) {
    return question.alternatives.map((alternative) => {
      return (
        <div
          className="card-action grey lighten-3"
          key={alternative.alternativeDescription}
        >
          <a
            href=""
            className="black-text"
          >
            {alternative.alternativeDescription}
          </a>
        </div>
      );
    });
  }

  renderQuestions() {
    const questions = this.props.questionList[0].questions;
    return questions.map((question) => {
      return (
        <div
          className="card grey lighten-1"
          key={question.description}
        >
          <div
            className="card-content white-text"
          >
            <div
              className="card-title"
            >
              {question.description}
            </div>
          </div>
          {this.renderQuestionAlternative(question)}
        </div>
      );
    });
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
