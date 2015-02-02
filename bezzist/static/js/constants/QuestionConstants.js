'use strict';

var keyMirror = require('keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    QUESTION_CREATE: null,
    QUESTION_UPDATE: null,
    QUESTION_UPVOTE: null,
    QUESTION_DOWNVOTE: null,
    QUESTION_CREATE_FAILED: null,
    QUESTION_UPVOTE_FAILED: null,
    SET_CURRENT_QUESTION: null,
    RECEIVE_ALL_QUESTIONS: null
  })

};