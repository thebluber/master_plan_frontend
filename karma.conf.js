'use strict';

module.exports = function(config) {

  var configuration = {
    autoWatch : true,
    logLevel: config.LOG_INFO,

    frameworks: ['jasmine'],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/'
    },

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
      '**/*.html': ['ng-html2js']
    }

  };

  config.set(configuration);
};
