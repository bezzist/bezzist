'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes = require('../constants/AnswerConstants').ActionTypes;

module.exports = {

  receiveAnswersForQuestion: function(questionId, answers) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.RECEIVE_ANSWERS_FOR_QUESTION,
      questionId: questionId,
      answers: answers
    });
  },

  updateAnswer: function(questionId, answer) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.UPDATE,
      questionId: questionId,
      answer: answer
    });
  },

  createAnswerFailed: function(questionId) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.CREATE_FAILED,
      questionId: questionId
    });
  },

  upvoteFailedForAnswer: function(questionId, answerId) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.UPVOTE_FAILED,
      questionId: questionId,
      answerId: answerId
    });
  },

};
