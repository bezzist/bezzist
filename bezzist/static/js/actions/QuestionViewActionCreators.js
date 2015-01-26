'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/QuestionConstants').ActionTypes;
var QuestionApiUtils = require('../utils/QuestionApiUtils');

module.exports = {

  upvoteQuestion: function(questionId) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.QUESTION_UPVOTE,
      questionId: questionId
    });
    QuestionApiUtils.upvoteQuestion(questionId);
  },

  createQuestion: function(question) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.QUESTION_CREATE,
      question: question
    });
    return QuestionApiUtils.createQuestion(question);
  }

};