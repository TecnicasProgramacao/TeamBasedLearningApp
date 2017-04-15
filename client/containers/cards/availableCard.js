import React, { Component } from 'react';
import { connect } from 'react-redux';

class AvailableCard extends Component {

  renderAvailableQuestions() {
    const questions = this.props.questionList[0].questions;
    var available_questions = [];

    available_questions = filterAvailableQuestions(questions);

    return available_questions.map((question) => {
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
        </div>
      );
    });
  }


  render() {
    return (
      <div>
        {this.renderAvailableQuestions()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questionList: state.questionList,
  };
}

function filterAvailableQuestions (allQuestions) {
  var available_questions = [];

  allQuestions.map((question) => {
    if (question.available) {
      available_questions.push(question);
    }
  })

  return available_questions;
}

AvailableCard.propTypes = {
  questionList: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(AvailableCard);
