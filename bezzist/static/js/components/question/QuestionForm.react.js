/**
  * @jsx React.DOM
  * @flow
  */
'use strict';

var React = require('react');
var $ = require('jquery');
var Form = require('../base/Form.react');

var QuestionForm = React.createClass({
  getFormError: function() {
    return 'The question field cannot be empty :(';
  },

  createQuestion: function(question) {
    var data = {question: question, email: ''};
    return $.post('/api/v1/questions/', JSON.stringify(data))
  },

  render: function() {
    return (
      <Form
        formError={this.getFormError()}
        createRow={this.createQuestion}
        addRow={this.props.addQuestion}
        expandRows={this.props.expandRows}
        placeholder='add new question'
        qForm={true} />
    );
  }
});

module.exports = QuestionForm;