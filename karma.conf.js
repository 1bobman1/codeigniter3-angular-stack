module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
        {pattern: 'public/vendor/jquery/dist/jquery.min.js', watch: false},
        {pattern: 'public/vendor/jquery-ui/jquery-ui.min.js', watch: false},
        {pattern: 'public/vendor/angular/angular.min.js', watch: false},
        {pattern: 'public/vendor/angular-mocks/angular-mocks.js', watch: false},
        {pattern: 'public/vendor/angular-animate/angular-animate.min.js', watch: false},
        {pattern: 'public/vendor/angular-aria/angular-aria.min.js', watch: false},
        {pattern: 'public/vendor/angular-messages/angular-messages.min.js', watch: false},
        {pattern: 'public/vendor/angular-route/angular-route.min.js', watch: false},
        {pattern: 'public/vendor/angular-material/angular-material.min.js', watch: false},
        {pattern: 'public/vendor/karma-read-json/karma-read-json.js', watch: false},
        {pattern: 'public/vendor/angular-material-data-table/dist/md-data-table.min.js', watch: false},
        'public/html/**/*.html',
        'public/js/main.min.js',
        'tests/*.test.js',
        { pattern:  'public/js/*.json',
            watched:  true,
            served:   true,
            included: false }
    ],
    preprocessors: {
    'public/html/**/*.html': ['ng-html2js']
    }, 
    ngHtml2JsPreprocessor: {
        stripPrefix: "public",
        moduleName: 'test-templates',
    }
  });
}; 
