'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    realtime: {
      app: 'app'
    },
    shell: {
      multiple: {
        command: [
          'zip -r real.nw *',
          'node-webkit real.nw'
        ].join('&&')
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: 'JST'
        },
        files: {
          'app/scripts/templates.js': 'app/templates/*.hbs'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'handlebars',
    'shell'
  ]);
}