import React, { Component } from 'react';
import { connect } from 'react-redux';

require('./style/question.css');

class QuestionAlternatives extends Component {

  static renderQuestionAlternative(questionAlternatives) {
    if (this.props.typeOfAnswering === 'GA') {
      QuestionAlternatives.renderGroupAlternatives(questionAlternatives);
    } else if (this.props.typeOfAnswering === 'IA') {
      // QuestionAlternatives.renderIndividualAlternatives(questionAlternatives);
    }
  }

  static renderGroupAlternatives(questionAlternatives) {
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

  static renderPreLoader(){
    return (
      <div className="progress">
        <div className="indeterminate" />
      </div>
    );
  }

  componentWillMount() {
    return(
      <div>
        {QuestionAlternatives.renderPreLoader()}
      </div>
    );
  }
  render() {
    console.log(this.props.typeOfAnswering);
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
};

export default connect(mapStateToProps)(QuestionAlternatives);
