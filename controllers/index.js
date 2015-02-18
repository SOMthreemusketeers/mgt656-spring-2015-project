'use strict';

var events = require('../models/events');

/**
 * Controller that renders our index (home) page.
 */
function index (request, response) {
  var contextData = {
    'title': 'Welcome to the Three Musketeers Event Planner. ',
    'tagline': 'Join us, and plan your own',
    'events': events.all
    
  };
  response.render('index.html', contextData);
}

module.exports = {
  index: index
};
