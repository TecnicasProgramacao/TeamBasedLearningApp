import React, { Component } from 'react';

class GroupAlternative extends Component {
  constructor(props) {
    super(props);
    this.state = { alternativeStyle: null };
    this.groupAnswerListener = this.groupAnswerListener.bind(this);
  }

  groupAnswerListener(alternative) {
    const WRONG_ANSWER = 0;
    const CORRECT_ANSWER_STYLE = {
      backgroundColor: 'green',
    };
    const WRONG_ANSWER_STYLE = {
      backgroundColor: 'red',
    };
    if(this.state.alternativeStyle) {
      this.setState({ alternativeStyle: null});
    } else {
      if (alternative.alternativePoints !== WRONG_ANSWER) {
        this.setState({ alternativeStyle: CORRECT_ANSWER_STYLE });
      } else {
        this.setState({ alternativeStyle: WRONG_ANSWER_STYLE });
      }
    }
  }

  render() {
    return (
      <div
        className="card-action"
        key={this.props.alternative.alternativeDescription}
        onClick={() => this.groupAnswerListener(this.props.alternative)}
        style={this.state.alternativeStyle}
      >
        <a className="collection-item black-text">
          {this.props.alternative.alternativeDescription}
        </a>
      </div>
    );
  }
}

GroupAlternative.propTypes = {
  alternative: React.PropTypes.object.isRequired,
};
export default GroupAlternative;
