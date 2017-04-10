import React, { Component } from 'react';
import { connect } from 'react-redux';

class AvailableCard extends Component {

  renderAvailableQuestions() {
    const questions = this.props.questionList[0].questions;
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

AvailableCard.propTypes = {
  questionList: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(AvailableCard);
