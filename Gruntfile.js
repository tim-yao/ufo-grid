/**
 * @file
 * Grunt tasks.
 */

/* global module */
module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dev: {
        files: {
          ['demo/style.css']: 'demo/style.scss'
        },
        options: {
          sourceMap: true,
          outputStyle: 'expanded'
        }
      }
    },
    watch: {
      styles: {
        files: [
           'core/*.scss',
           'demo/*.scss'
        ],
        tasks: ['sass:dev'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['sass:dev']);
};
