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
          '<%= realtime.app %>/scripts/templates.js': '<%= realtime.app %>/templates/*.hbs'
        }
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: '<%= realtime.app %>/styles',
          cssDir: '<%= realtime.app %>/styles'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'compass',
    'handlebars',
    'shell'
  ]);
}