import React, { Component } from 'react';
import { connect } from 'react-redux';

require('./style/question.css');

class QuestionAlternatives extends Component {

  static renderQuestionAlternative(questionAlternatives) {
    return questionAlternatives.map((alternative) => {
      return (
        <div className="card-action" key={alternative.alternativeDescription} >
          <a className="collection-item black-text">
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

function mapStateToProps(state) {
  return {
    typeOfAnswering: state.typeOfAnswering,
  };
}

QuestionAlternatives.propTypes = {
  questionAlternatives: React.PropTypes.array.isRequired,
  typeOfAnswering: React.PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(QuestionAlternatives);
