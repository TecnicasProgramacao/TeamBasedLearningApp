import React, { Component } from 'react';
import { connect } from 'react-redux';
import './question.css';

class Question extends Component {

  static renderQuestionAlternative(question) {
    return question.alternatives.map((alternative) => {
      return (
        <div
          className="card-action"
          key={alternative.alternativeDescription}
        >
          <a
            className="collection-item black-text"
          >
            {alternative.alternativeDescription}
          </a>
        </div>
      );
    });
  }

  renderQuestions() {
    const questions = this.props.questionListData[0].questions;
    return questions.map((question) => {
      return (
        <div
          className="card"
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
          {Question.renderQuestionAlternative(question)}
        </div>
      );
    });
  }


  render() {
    return (
      <div>
        {this.renderQuestions()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questionListData: state.questionListData,
  };
}

Question.propTypes = {
  questionListData: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Question);
