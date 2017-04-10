import React, { Component } from 'react';
import './question.css';

class QuestionAlternatives extends Component {

  static renderQuestionAlternative(questionAlternatives) {
    return questionAlternatives.map((alternative) => {
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


  render() {
    return (
      <div>
        {QuestionAlternatives.renderQuestionAlternative(this.props.questionAlternatives)}
      </div>
    );
  }
}

QuestionAlternatives.propTypes = {
  questionAlternatives: React.PropTypes.array.isRequired,
};

export default QuestionAlternatives;
