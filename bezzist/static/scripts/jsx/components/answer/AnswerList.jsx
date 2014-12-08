/** @jsx React.DOM */
'use strict';

define(
['react', 'underscore', 'components/answer/AnswerRow'],
function (React, _, AnswerRow) {
  return React.createClass({
    render: function() {
      var visible_answers, hidden_answers;
      visible_answers = _.map(this.props.answers.slice(0, 5), function(answer, idx) {
        return <AnswerRow answer={answer} idx={idx+1} hidden={false} />;
      });
      hidden_answers = _.map(this.props.answers.slice(5), function(answer, idx) {
        return <AnswerRow answer={answer} idx={idx+6} hidden={this.props.seeMore.hidden} />;
      }.bind(this));
      return (
        <div>
          <ul className='question-answer-list'>
            {visible_answers}
            {hidden_answers}
            <li className='question-see-more-container'>
              <p className='question-see-more-button' onClick={this.props.toggleAnswers}>
                {this.props.seeMore.text}
              </p>
            </li>
          </ul>
        </div>
      );
    }
  });
});