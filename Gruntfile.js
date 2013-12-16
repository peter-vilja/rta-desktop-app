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
    sass: {
      dist: {
        files: {
          '<%= realtime.app %>/styles/main.css': '<%= realtime.app %>/styles/main.sass'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', '> 1%']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= realtime.app %>/styles',
          src: '{,*/}*.css',
          dest: '<%= realtime.app %>/styles'
        }]
      }
    },
  });

  grunt.registerTask('default', [
    'sass',
    'autoprefixer',
    'handlebars',
    'shell'
  ]);
}