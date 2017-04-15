import React, { Component } from 'react';
import { connect } from 'react-redux';

require('./style/question.css');

class QuestionAlternatives extends Component {
  constructor(props) {
    super(props);
    this.renderQuestionAlternative = this.renderQuestionAlternative.bind(this);
    this.renderGroupAlternatives = this.renderGroupAlternatives.bind(this);
    this.groupListener = this.groupListener.bind(this);
  }
  renderQuestionAlternative(questionAlternatives) {
    if (this.props.typeOfAnswering === 'GA') {
      return (
        <div>
          {this.renderGroupAlternatives(questionAlternatives)}
        </div>
      );
    } else if (this.props.typeOfAnswering === 'IA') {
      // QuestionAlternatives.renderIndividualAlternatives(questionAlternatives);
    }
  }

  groupListener(alternative){
    if (alternative.alternativePoints !== 0) {
      console.log("Resposta correta!");
    } else {
      console.log("Resposta errada!");
    }
  }

  renderGroupAlternatives(questionAlternatives) {
    return questionAlternatives.map((alternative) => {
      return (
        <div className="card-action" key={alternative.alternativeDescription} >
          <a onClick={() => this.groupListener(alternative)} className="collection-item black-text">
            {alternative.alternativeDescription}
          </a>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderQuestionAlternative(this.props.questionAlternatives)}
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
