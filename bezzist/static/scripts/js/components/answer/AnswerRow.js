/** @jsx React.DOM */
'use strict';

define(
['react', 'lib/Utils'],
function (React, Utils) {
  return React.createClass({
    getInitialState: function() {
      return {
        'score': this.props.answer.score
      };
    },

    incrementVote: function() {
      $.ajax({
        url: '/api/v1/answers/' + this.props.answer.id + '/',
        type: 'PUT',
        data: JSON.stringify({
          'answer': this.props.answer.answer,
          'score': this.props.answer.score + 1
        }),
        dataType: 'json'
      }).done(function(answer) {
        this.setState({
          'score': answer.score
        });
      }.bind(this));
      return false;
    },

    render: function() {
      var className = 'answer-row';
      if (this.props.hidden) {
        className += ' hidden';
      }
      return (
        React.createElement("li", {className: className}, 
          React.createElement("div", {className: "answer-row-content"}, 
            React.createElement("span", {className: "answer-idx"}, this.props.idx), 
            React.createElement("span", {className: "answer-text"}, 
              Utils.capitalize(this.props.answer.answer)
            )
          ), 
          React.createElement("div", {
            onClick: this.incrementVote, 
            className: "answer-vote-box"}, 
            React.createElement("img", {
              className: "answer-vote-icon", 
              src: '/static/imgs/bezz_thumbsup.png'}), 
            React.createElement("p", {className: "answer-score"}, this.state.score)
          )
        )
      );
    }
  });
});