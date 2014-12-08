/**
  * @jsx React.DOM
  * @flow
  */
'use strict';

define(
['react', 'underscore', 'components/question/QuestionRow'],
function (React, _, QuestionRow) {
  return React.createClass({
    render: function() {
      var rows = _.map(this.props.qs, function(q, idx) {
        if ((idx + 1) % 3 === 0) {
          return <QuestionRow q={q} last={true} />;
        } else {
          return <QuestionRow q={q} />;
        }
      });
      return (
        <ul className='question-list'>
          {rows}
        </ul>
      );
    }
  });
});